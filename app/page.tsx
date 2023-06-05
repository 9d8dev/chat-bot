import { Chat } from '@/components/ai-chat/Chat';
import Header from '@/components/Header';

function Home() {
	return (
		<main className="flex md:mt-12 flex-col items-center w-full">
			<Header />
			<section className="w-full max-w-screen-md p-4">
				<Chat />
			</section>
		</main>
	);
}

export default Home;
