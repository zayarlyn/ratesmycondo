import Image from 'next/image'
import React from 'react'

interface Props {
	photos: { url: string; id: string; alt: string }[]
}

const Gallery = ({ photos }: Props) => {
	return (
		<div className='grid grid-rows-[110px_110px] grid-cols-2 gap-1'>
			<div className='row-span-2'>
				<Image src={photos[0].url} alt={photos[0].alt} width={560} height={373} className='w-full h-full object-cover' />
			</div>
			<div className='row-span-1'>
				<Image src={photos[1].url} alt={photos[1].alt} width={560} height={373} className='w-full h-full object-cover' />
			</div>
			<div className='row-span-1'>
				<Image src={photos[2].url} alt={photos[2].alt} width={560} height={373} className='w-full h-full object-cover' />
			</div>
		</div>
	)
}

export default Gallery
