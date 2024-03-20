import Image from 'next/image';
import logoImg from './Logo.svg'
import Link from 'next/link';

const Logo = () => {
	return ( 
		<h1>
			<Link href='/'><Image src={logoImg} alt='logo'/></Link>
		</h1>
	 );
}
 
export default Logo;