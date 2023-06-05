import './globals.css';
import { Inter } from 'next/font/google';
import about from '@/utils/about.json';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: `${about.site_title}`,
	description: `${about.site_description}`
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
