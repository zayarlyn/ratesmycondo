import Gallery from '@/components/Gallery'
import Rating from '@/components/Rating'
import { graphql } from '@/gql'
import { countryByCode } from '@/utils/countries'
import { client } from '@/utils/graphql-request'
import Link from 'next/link'

export const revalidate = 60 * 1

const photos = [
	'https://www.ananda.co.th/stocks/project/o0x0/qo/cr/gzttqocrxz/_DSC7423.jpg',
	'https://www.ananda.co.th/stocks/project/o0x0/m0/i0/gzttm0i0d5/2.jpg',
	'https://www.ananda.co.th/stocks/project/o0x0/m0/x8/gzttm0x8u8/3.jpg',
]

const residenceListGql = graphql(`
	query residenceList {
		residenceList {
			id
			name
			description
			mapUrl
			countryCode
			type
			reviews {
				id
				# content
				# rating
				# roomSize
				# room_type
				# year
				# rented
				# residenceId
				# userId
			}
		}
	}
`)

export default async function Home({ params }: { params: any }) {
	const { residenceList } = await client.request(residenceListGql)
	// console.log(residenceList)

	return (
		<main className='rmc-p'>
			<h1 className='text-center text-2xl my-8'>A platform to rate and review the best condos based on resident feedback.</h1>

			<div className='flex items-center rmc-py mb-1 gap-1'>
				<p>
					Showing condos in <b className='font-medium'>{countryByCode[params.cc]}</b>.
				</p>
				<div className='group/dropdown relative' tabIndex={0}>
					<button className='text-blue-600 underline active:text-red-400'>Change</button>
					<ul className='group-focus-within/dropdown:scale-100 scale-0 absolute bg-slate-50 right-0 shadow-sm rounded p-1 top-full mt-1 max-h-60 overflow-auto'>
						{Object.entries(countryByCode).map(([cc, countryName]) => (
							<Link key={cc} href={`/${cc}`}>
								<li className='px-5 py-2 hover:bg-slate-200 active:bg-slate-300 cursor-pointer'>{countryName}</li>
							</Link>
						))}
					</ul>
				</div>
			</div>
			<section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{residenceList?.map((residence) => (
					<Link key={residence.id} href={`${residence.countryCode}/${residence.id}`}>
						<div className='mb-6'>
							<Gallery photos={photos.map((url, idx) => ({ url, id: `${residence.id}-${idx}`, alt: residence.name }))} />
							<h2 className='text-lg mt-1'>{residence.name}</h2>
							<div className='flex items-center justify-between mt-1'>
								<Rating value={5} />
								<span>{residence.reviews?.length} reviews</span>
							</div>
						</div>
					</Link>
				))}
			</section>
		</main>
	)
}
