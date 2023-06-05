import { Chat } from '@/components/ai-chat/Chat';
import Header from '@/components/Header';

function Home() {
	return (
		<main className="flex md:mt-12 flex-col items-center w-full">
			<Header />
			<a className='sw' href="https://github.com/brijr/chat-bot">See the Repo on GitHub</a>
			<a
				className="mb-8 block"
				href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fchat-bot&env=OPENAI_API_KEY,OPENAI_ORGANIZATION&envDescription=API%20Keys%20needed%20for%20Chat%20Bot%20to%20work.&envLink=https%3A%2F%2Fplatform.openai.com%2F"
			>
				<img src="https://vercel.com/button" alt="Deploy with Vercel" />
			</a>
			<section className="w-full max-w-screen-md p-4">
				<Chat />
			</section>
		</main>
	);
}

export default Home;
