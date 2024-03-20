import Link from "next/link";
import style from "./Nav.module.scss";
import { Button } from "@/shared/ui/UI";

import { ROUTER } from "@/ROUTER/ROUTER.enum";

const links = [
  { text: "Marketplace", link: ROUTER.MARKETPLACE },
  { text: "Rankings", link: ROUTER.RANKINGS },
  { text: "Connect a wallet", link: ROUTER.COONECT },
];

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        {links.map(({ text, link }, i) => (
          <li className={style.nav__link} key={i}>
            <Link href={link}>{text}</Link>
          </li>
        ))}
        <li>
          <Link href={ROUTER.REGISTER}>
            <Button padding={30} icon="user">
              Sign Up
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
