import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function PricingPage() {
	return (
		<MainLayout>
			<h1 className={'title'}>
				Welcome to ir a <Link href='/contact'>Contact</Link>
			</h1>
		</MainLayout>
	);
}
