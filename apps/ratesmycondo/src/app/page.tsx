import Gallery from '@/components/Gallery'
import Rating from '@/components/Rating'
import Link from 'next/link'

const residents = [
	{
		id: 'id-1',
		name: 'Ideo Mobi Eastpoint',

		photos: [
			'https://www.ananda.co.th/stocks/project/o0x0/qo/cr/gzttqocrxz/_DSC7423.jpg',
			'https://www.ananda.co.th/stocks/project/o0x0/m0/i0/gzttm0i0d5/2.jpg',
			'https://www.ananda.co.th/stocks/project/o0x0/m0/x8/gzttm0x8u8/3.jpg',
		],
	},
]

export default function Home() {
	return (
		<main className='rmc-p'>
			<h1 className='text-center text-2xl my-8'>A platform to rate, review, and find the best condos based on user feedback.</h1>

			<div className='flex items-center rmc-py mb-1 gap-1'>
				<p>
					Showing condos in <b className='font-medium'>Thailand</b>.
				</p>
				<button className='text-blue-600 underline'>Change</button>
			</div>
			<section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{[...residents, ...residents, ...residents].map((resident) => (
					<Link key={resident.id} href={`/resident/${resident.id}`}>
						<div className='mb-6'>
							<Gallery photos={resident.photos.map((url, idx) => ({ url, id: `${resident.id}-${idx}`, alt: resident.name }))} />
							<h2 className='text-lg mt-1'>{resident.name}</h2>
							<div className='flex items-center justify-between mt-1'>
								<Rating value={5} />
								<span>12 reviews</span>
							</div>
						</div>
					</Link>
				))}
			</section>
		</main>
	)
}
