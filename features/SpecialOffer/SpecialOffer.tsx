import { Button, Title } from '@/shared/ui/UI';
import style from './specialOffer.module.scss'

import imgBG from '@/images/NFT Highlight.jpg'
import { useUnit } from 'effector-react';
import { $UsersStore } from '@/store/Users/UsersStore';
import Image from 'next/image';

import avatar from '@/data/users/user.png'
import Timer from '@/widgets/Timer/Timer';

const SpecialOffer = () => {

	const users = useUnit($UsersStore)
	return ( 
		<section className={style.specialOffer}>
			<div className={style.specialOffer__container}>
				<div className={style.specialOffer__row}>
					<div className={style.text}>
						<div className={style.user}>
							<div className={style.avatar}><Image src={avatar} alt='avatar'/></div>
							{users&& users[2].name}

						</div>
						<Title mb={30}>Magic Mashrooms</Title>
						<Button colorText={'#000'} border={'none'} icon='see' bg={['#fff']}>See NFT</Button>
					</div>

					<Timer/>
				</div>
			</div>
		</section>
	 );
}
 
export default SpecialOffer;