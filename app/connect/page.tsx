import Image from "next/image";
import style from "./connect.module.scss";
import { Text, Title } from "@/shared/ui/UI";

import img from "@/images/connect.jpg";

import icon01 from "@/images/icons/Coinbase.svg";
import icon02 from "@/images/icons/Metamask.svg";
import icon03 from "@/images/icons/WalletConnect.svg";
import ConnectButton from "@/widgets/ConnectButton/ConnectButton";

const Buttons = [
  { text: "Metamask", img: icon01 },
  { text: "Wallet Connect", img: icon02 },
  { text: "Coinbase", img: icon03 },
];

const Connect = () => {
  return (
    <main>
      <div className={style.connect}>
        <div className={style.img}>
          <Image src={img} alt="bg" />
        </div>
        <div className={style.content}>
          <Title mb={20}>Connect wallet</Title>
          <Text mb={40}>
            Choose a wallet you want to connect. There are several wallet
            providers.
          </Text>
          <div className={style.buttons}>
            {Buttons.map((btn, i) => (
              <ConnectButton data={btn} key={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Connect;
