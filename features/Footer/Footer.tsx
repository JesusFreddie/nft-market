'use client'
import Link from "next/link";
import style from "./footer.module.scss";
import { ROUTER } from "@/ROUTER/ROUTER.enum";
import { Button } from "@/shared/ui/UI";

import { useForm, SubmitHandler } from "react-hook-form";

const Links = [
  { text: "Marketplace", links: ROUTER.MARKETPLACE },
  { text: "Rankings", links: ROUTER.RANKINGS },
  { text: "Connect a wallet", links: ROUTER.COONECT },
];

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__row}>
          <div className={style.footer__nav}>
            <p className={style.title}>Explore</p>
            <ul>
              {Links.map(({ text, links }, i) => (
                <li key={i} className={style.text}>
                  <Link href={links}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <form className={style.footer__form} onSubmit={handleSubmit(onSubmit)}>
            <p className={style.title}>Join our weekly digest</p>
            <p className={style.text}>
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <label className={style.inputWrapper + " " + (errors.email ? style.error : null)}>
              <input type="text" placeholder="Enter your email here" 
								{...register('email', {required: true})}
							/>
              <Button type="submit">Subscribe</Button>
							{errors.email && <span className={style.error}>Некоректные данные </span>}
            </label>
						
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
