import style from "./workSteps.module.scss";

import imgCard1 from "@/images/cards/steps1.svg";
import imgCard2 from "@/images/cards/steps2.svg";
import imgCard3 from "@/images/cards/steps3.svg";
import { Text, Title } from "@/shared/ui/UI";
import WorkStepsCard from "@/widgets/WorkSpepsCard/WorkStepsCard";

const Cards = [
  {
    title: "Setup Your wallet",
    text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    img: imgCard1,
  },
  {
    title: "Create Collection",
    text: "Upload your work and setup your collection. Add a description, social links and floor price.",
    img: imgCard2,
  },
  {
    title: "Start Earning",
    text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    img: imgCard3,
  },
];

const WorkSteps = () => {
  return (
    <section className={style.workSteps}>
      <div className="container">
        <div className={style.workSteps__row}>
					<div className={style.text}>
						<Title mb={10}>How it works</Title>
						<Text mb={48}>Find out how to get started</Text>
					</div>
          <div className={style.list}>
            {Cards.map((card, i) => (
              <WorkStepsCard key={i} card={...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSteps;
