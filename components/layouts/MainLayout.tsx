import styles from './MainLayout.module.css';
import Head from 'next/head';
import { Navbar } from '../Navbar';
import { FC, PropsWithChildren } from 'react';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home - Arnoldo Suarez</title>
				<meta name='description' content='Home Page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<h1>Home Page</h1>

			<main className={styles.main}>{children}</main>
		</div>
	);
};
