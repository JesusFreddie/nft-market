import Image from "next/image";
import style from "./register.module.scss";

import img from "@/images/register.jpg";
import { Button, Text, Title } from "@/shared/ui/UI";

import emailInputIcon from "@/images/icons/input/Email.svg";
import userInputIcon from "@/images/icons/input/User.svg";
import lockKeyInputIcon from "@/images/icons/input/LockKey.svg";

const Register = () => {
  return (
    <main>
      <div className={style.register}>
        <div className={style.img}>
          <Image src={img} alt="bg" />
        </div>
        <div className={style.content}>
          <Title mb={20}>Create account</Title>
          <Text mb={40}>
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </Text>
          <form>
            <label className={style.input}>
              <Image src={userInputIcon} alt="user" />
              <input type="text" placeholder="Username" />
            </label>
            <label className={style.input}>
              <Image src={emailInputIcon} alt="email" />
              <input type="email" placeholder="Email Address" />
            </label>
            <label className={style.input}>
              <Image src={lockKeyInputIcon} alt="password" />
              <input type="password" placeholder="Password" />
            </label>
            <label className={style.input}>
              <Image src={lockKeyInputIcon} alt="password" />
              <input type="password" placeholder="Confirm Password" />
            </label>
						<Button width='100%' paddingTop={12}>Create account</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
