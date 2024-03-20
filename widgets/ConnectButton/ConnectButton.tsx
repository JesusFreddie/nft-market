import Image from "next/image";

import style from './ConnectButton.module.scss'

const ConnectButton = ({data}) => {

	const { text, img } = data

	return ( 
		<button className={style.button}>
			<Image src={img} alt="asd"/>
			{text}
		</button>
	 );
}
 
export default ConnectButton;