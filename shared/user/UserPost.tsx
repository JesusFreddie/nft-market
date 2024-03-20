import Image from "next/image";
import style from "./user.module.scss";

import avatarImg from '@/data/users/images'

import data from "@/data/users.json";

const URL = "@/data";

const UserPost = ({userData}) => {
	const { id, name, avatar } = userData;
  return (
    <div className={style.user}>
      <Image src={avatarImg[id - 1]} alt="user" />
      <p>{name}</p>
    </div>
  );
};

export default UserPost;
