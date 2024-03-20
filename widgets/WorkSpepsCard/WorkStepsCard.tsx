import { Text, Title } from "@/shared/ui/UI";
import Image from "next/image";

import style from './workStepsCard.module.scss'

const WorkStepsCard = ({ card }) => {
  const { img, title, text } = card;

  return (
    <div className={style.card}>
      <div className={style.img}><Image src={img} alt={title} /></div>
      <div className={style.text}>
        <Title level={3} mb={10}>{title}</Title>
        <Text fontWeight={400} fontSize={16}>{text}</Text>
      </div>
    </div>
  );
};

export default WorkStepsCard;
