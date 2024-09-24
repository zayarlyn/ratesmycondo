import Gallery from '@/components/Gallery'
import React from 'react'
const resident = {
	id: 'id-1',
	name: 'Ideo Mobi Eastpoint',

	photos: [
		'https://www.ananda.co.th/stocks/project/o0x0/qo/cr/gzttqocrxz/_DSC7423.jpg',
		'https://www.ananda.co.th/stocks/project/o0x0/m0/i0/gzttm0i0d5/2.jpg',
		'https://www.ananda.co.th/stocks/project/o0x0/m0/x8/gzttm0x8u8/3.jpg',
	],
}

const page = () => {
	return (
		<main className='rmc-p'>
			<div className='mt-4' />
			<Gallery photos={resident.photos.map((url, idx) => ({ url, id: `${resident.id}-${idx}`, alt: resident.name }))} />
		</main>
	)
}

export default page
