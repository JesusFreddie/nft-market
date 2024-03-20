import Image from "next/image";
import style from "./card.module.scss";
import { Title } from "@/shared/ui/UI";
import User from "@/shared/user/UserPost";

import imgPost from '@/data/posts/image'

import imgHero from "@/images/cards/hero.jpg";
import { useEffect, useRef, useState } from "react";

import { useUnit } from "effector-react";
import { $UsersStore, getUsersFx } from "@/store/Users/UsersStore";

const Post = ({ post, isPostData = true, imgOnly = false, bgColor }) => {
  const postItem = useRef(null);

  const [user, setUser] = useState(null);

  const Users = useUnit({
    users: $UsersStore,
  });

  useEffect(() => {
    Users.users.forEach((user) => {
      user.id === post.idUser ? setUser(user) : null;
    });
  });

  return (
    <>
      {post && (
        <div ref={postItem} className={style.post} style={{
					backgroundColor: bgColor
				}}>
          {imgHero && (
            <div className={style.img}>
              <Image src={imgPost[post.id - 1]} alt="as" />
            </div>
          )}
          {!imgOnly && (
            <div className={style.post__text}>
              <div className={style.post__author}>
                <Title level={3}>{post.name}</Title>
                {user && <User userData={user} />}
              </div>
              {isPostData && (
                <div className={style.post__data}>
                  <div className={style.price}>
                    <span>Price</span>
                    {post.price}
                  </div>
                  <div className={style.highest__bid}>
                    <span>Highest Bid</span>
                    {post.highestBid}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Post;
