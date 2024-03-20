import Image from "next/image";
import style from "./categorie.module.scss";

import image from '@/data/categories/images'

// import img from "@/data/categories/categorie.jpg";
// import iconHover from '@/data/categories/hover.svg'
import { Text, Title } from "@/shared/ui/UI";

const Categorie = ({ data }) => {
  const { id, name } = data;
  return (
    <div className={style.categorie}>
      <div className={style.img}>
				<div className={style.iconHover}>
					<Image src={image[id - 1].icon} alt="icon"/>
				</div>
        <Image src={image[id - 1].img} alt='img' />
      </div>
      <div className={style.content}>
        <Title mb={0} level={3}>{name}</Title>
      </div>
    </div>
  );
};

export default Categorie;
