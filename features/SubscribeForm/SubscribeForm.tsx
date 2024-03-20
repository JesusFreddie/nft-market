import Image from "next/image";
import style from "./subscribeForm.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";

import img from "@/images/fotmsub.jpg";
import { Button, Input, Text, Title } from "@/shared/ui/UI";

import emailInputIcon from "@/images/icons/input/Email.svg";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={style.subscribeForm}>
      <div className="container">
        <div className={style.subscribeForm__row}>
          <div className={style.img}>
            <Image src={img} alt="formImg" />
          </div>
          <div className={style.content}>
            <div className={style.text}>
              <Title>Join our weekly digest</Title>
              <Text>
                Get exclusive promotions & updates straight to your inbox.
              </Text>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <label className={style.inputWrapper}>
								<input type="email" placeholder="Enter your email here"/>
								<Button icon='email'>Subscribe</Button>
							</label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
