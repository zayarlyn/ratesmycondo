/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.ananda.co.th',
				// port: '',
				// pathname: '/account123/**',
			},
		],
	},
}

export default nextConfig
