'use client';

import { useEffect, useState } from 'react';
import { Button } from './Button';
import { type ChatGPTMessage, ChatLine, LoadingChatLine } from './ChatLine';
import { useCookies } from 'react-cookie';
import about from '@/utils/about.json';

const COOKIE_NAME = 'ampryai-chat';

export const initialMessages: ChatGPTMessage[] = [
	{
		role: 'assistant',
		content: `${about.first_message}`
	}
];

const InputMessage = ({ input, setInput, sendMessage }: any) => (
	<div className="mt-6 flex flex-col lg:flex-row clear-both">
		<input
			type="text"
			aria-label="chat input"
			required
			className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-4 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-700 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
			value={input}
			placeholder="Type your message here..."
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					sendMessage(input);
					setInput('');
				}
			}}
			onChange={(e) => {
				setInput(e.target.value);
			}}
		/>
		<Button
			type="submit"
			className="lg:ml-4 mt-4 lg:mt-0 px-4 py-4 lg:py-0 font-semibold flex-none bg-blue-500"
			onClick={() => {
				sendMessage(input);
				setInput('');
			}}
		>
			Send Message
		</Button>
	</div>
);

export function Chat() {
	const [messages, setMessages] = useState<ChatGPTMessage[]>(initialMessages);
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);
	const [cookie, setCookie] = useCookies([COOKIE_NAME]);

	useEffect(() => {
		if (!cookie[COOKIE_NAME]) {
			// generate a semi random short id
			const randomId = Math.random().toString(36).substring(7);
			setCookie(COOKIE_NAME, randomId);
		}
	}, [cookie, setCookie]);

	// send message to API /api/chat endpoint
	const sendMessage = async (message: string) => {
		setLoading(true);
		const newMessages = [...messages, { role: 'user', content: message } as ChatGPTMessage];
		setMessages(newMessages);
		const last10messages = newMessages.slice(-10); // remember last 10 messages

		const response = await fetch('/api/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				messages: last10messages,
				user: cookie[COOKIE_NAME]
			})
		});

		console.log('Edge function returned.');

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		// This data is a ReadableStream
		const data = response.body;
		if (!data) {
			return;
		}

		const reader = data.getReader();
		const decoder = new TextDecoder();
		let done = false;

		let lastMessage = '';

		while (!done) {
			const { value, done: doneReading } = await reader.read();
			done = doneReading;
			const chunkValue = decoder.decode(value);

			lastMessage = lastMessage + chunkValue;

			setMessages([...newMessages, { role: 'assistant', content: lastMessage } as ChatGPTMessage]);

			setLoading(false);
		}
	};

	return (
		<div className="rounded-2xl border-zinc-100 bg-slate-100 lg:border p-6 w-full">
			{messages.map(({ content, role }, index) => (
				<ChatLine key={index} role={role} content={content} />
			))}

			{loading && <LoadingChatLine />}

			{messages.length < 2 && (
				<span className="mx-auto flex flex-grow text-slate-600 clear-both">
					Type a message to start the conversation
				</span>
			)}
			<InputMessage input={input} setInput={setInput} sendMessage={sendMessage} />
		</div>
	);
}
