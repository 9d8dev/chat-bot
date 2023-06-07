import about from '@/utils/about.json';
import Image from 'next/image';

export default function Header() {
	return (
		<section className="p-6 mb-8 flex flex-col gap-8 justify-center">
			<h1 className="text-4xl font-bold text-center sr-only">{about.site_title}</h1>
			<a className="block mx-auto my-8" href={about.site_link} target="_blank">
				<Image src={about.logo_path} alt="logo" width={150} height={150}></Image>
			</a>
			<h2 className="text-xl max-w-screen-sm text-center">{about.site_description}</h2>
		</section>
	);
}
