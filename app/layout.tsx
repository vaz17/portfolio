import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://matthewvazquez.dev'),
	title: 'Matthew Vazquez – Software Developer',
	description:
		'Portfolio of Matthew Vazquez, a Computer Science student at MSU building scheduling tools, LAN games, and animation engines using Python, C++, and modern web technologies.',
	keywords: [
		'Matthew Vazquez',
		'Software Developer',
		'Computer Science Student',
		'Portfolio',
		'Next.js',
		'Python',
		'C++',
		'PyQt5',
		'Pygame',
		'FastAPI',
		'React',
		'LAN Games',
		'MSU',
		'Developer Portfolio',
	],
	authors: [{ name: 'Matthew Vazquez' }],
	creator: 'Matthew Vazquez',
	openGraph: {
		title: 'Matthew Vazquez – Software Developer Portfolio',
		description:
			'Explore the portfolio of Matthew Vazquez, a CS student at MSU focused on building practical tools and engaging applications with clean design and strong fundamentals.',
		url: 'https://matthewvazquez.dev',
		siteName: 'Matthew Vazquez Portfolio',
		images: [
			{
				url: '/og-image.jpg', // Replace this with your actual image or update the file
				width: 1200,
				height: 630,
				alt: 'Matthew Vazquez – Software Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Matthew Vazquez – Software Developer',
		description:
			'Portfolio of Matthew Vazquez, CS student at MSU creating software tools, games, and interfaces with Python, C++, and modern frameworks.',
		creator: '@', // You can leave this blank or add your Twitter handle later
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
