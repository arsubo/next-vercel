import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function AboutPage() {
	return (
		<>
			<h1 className={'title'}>
				Welcome to ir a <Link href='/'>Home</Link>
			</h1>
		</>
	);
}

AboutPage.getLayout = function getLayout(page: any) {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
