import { IconStar, IconStarFilled } from '@tabler/icons-react'

interface Props {
	value: number
}

const Rating = ({ value }: Props) => {
	console.log(value)
	return (
		<div className='flex gap-1'>
			{Array(5)
				.fill(3)
				.map((_, idx) => (
					<div key={idx} className='group'>
						<IconStarFilled stroke={1.5} className='' size={24} color='gold' />
					</div>
				))}
			<IconStar stroke={1.5} className='group-active:hidden ' size={24} color='gold' />
		</div>
	)
}

export default Rating
