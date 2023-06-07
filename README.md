# ChatGPT Chat Bot Template

![CleanShot 2023-06-07 at 10 28 46@2x](https://github.com/by9d8/chat-bot/assets/57158102/9cad5522-f9fe-4e4c-94b2-d3d2b187ace1)

This repository contains the source code for a chat bot application written primarily in TypeScript.

## Repository Structure

- `app`: Contains the application structure and global styles. This includes:
    - `favicon.ico`: Icon for the application.
    - `globals.css`: Global CSS styles.
    - `layout.tsx`: The main layout file.
    - `page.tsx`: The main page file.
- `components`: Contains the React components for the application. This includes:
    - `Header.tsx`: The header component.
    - `ai-chat`: A folder containing the chatbot-related components:
        - `Button.tsx`: Button component.
        - `Chat.tsx`: Main chat component.
        - `ChatLine.tsx`: Component for individual chat lines.
- `pages/api`: Contains server-side routes for the application. This includes:
    - `chat.ts`: API route for the chat functionality.
- `public`: Contains public assets for the application. This includes:
    - `logo.svg`: Logo for the application.
    - `next.svg`: Next.js logo.
    - `vercel.svg`: Vercel logo.
- `utils`: Contains utility files. This includes:
    - `OpenAIStream.ts`: Utility for streaming data from OpenAI.
    - `about.json`: JSON file containing metadata about the application.

Other files in the root directory are configuration files for tools such as ESLint, PostCSS, Tailwind CSS, and TypeScript.

## Setup and Installation

To set up and run this project locally:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Edit the `.env.example` to be `.env.local` wiht your credentials 
4. Start the development server by running `npm run dev`.

## Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
