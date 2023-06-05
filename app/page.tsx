import { Chat } from "@/components/ai-chat/Chat";

function Home() {
  return (
    <main className="flex md:mt-12 flex-col items-center w-full">
      <section className="w-full max-w-screen-md p-4">
        <Chat />
      </section>
    </main>
  );
}

export default Home;
