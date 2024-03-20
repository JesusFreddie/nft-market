import Nav from '@/widgets/nav/Nav';
import style from './Header.module.scss'
import Logo from '@/shared/logo/Logo';

const Header = () => {
	return ( 
		<header className={style.header}>
			<div className={style.header__container}>
				<div className={style.header__row}>
					<Logo/>
					<Nav/>
				</div>
			</div>
		</header>
	 );
}
 
export default Header;