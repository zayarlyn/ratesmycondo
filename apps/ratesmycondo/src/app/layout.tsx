import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../style/globals.css'
import Image from 'next/image'
import LogoImg from '../../public/logo.svg'
import { IconEdit } from '@tabler/icons-react'
import Link from 'next/link'

const geistSans = localFont({
	src: '../style/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: '../style/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Rates My Condo',
	description: 'A platform to rate, review, and find the best condos based on user feedback.',
	openGraph: {},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head></head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<header className='flex justify-between items-center rmc-p sticky top-0 left-0 bg-white'>
					<Link href='/'>
						<Image src={LogoImg} alt='Rate My Condo' className='w-44' />
					</Link>
					<Link href='/' className='text-nowrap underline flex items-center gap-1'>
						Add review <IconEdit />
					</Link>
				</header>
				{children}
			</body>
		</html>
	)
}
