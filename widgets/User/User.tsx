import Image from 'next/image';
import style from './user.module.scss';

import avatar from '@/data/users/images'

const User = ({user}) => {

	const { id, name, totalSales } = user;
	
	return ( 
		<div className={style.user}>
			<span className={style.user__id}>{id}</span>
			<div className={style.content}>
				<div className={style.avatar}><Image src={avatar[id - 1]} alt={name}/></div>
				<p className={style.name}>{name}</p>
				<p className={style.totalSales}>Total Sales: <span className={style.value}>{totalSales}</span></p>
			</div>
		</div>
	 );
}
 
export default User;