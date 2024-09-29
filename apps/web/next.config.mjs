/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => {
		return [
			{
				source: '/',
				destination: '/th',
				permanent: true,
			},
		]
	},
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
