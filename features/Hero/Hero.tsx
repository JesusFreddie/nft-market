import { Button, Text, Title } from "@/shared/ui/UI";
import style from "./hero.module.scss";
import { useEffect, useRef, useState } from "react";
import Post from "@/widgets/Post/Post";
import { useUnit } from "effector-react";
import { $PostsStore, getPostsFx } from "@/store/Posts/PostsStore";
import StatisticList from "@/widgets/statisticList/StatisticList";

import anime from "animejs";

const Hero = () => {
  const [heroPost, setHeroPost] = useState(null);

  const PostHero = useRef(null);

  const Posts = useUnit({
    posts: $PostsStore,
  });

  useEffect(() => {
    setHeroPost(Posts.posts[0]);
  });

  const pageWidth = document.documentElement.scrollWidth;

  useEffect(() => {
    anime({
      targets: PostHero.current,
      translateX: {
        value: [pageWidth, 0],
        duration: 1100,
      },
      scale: {
        value: [0.8, 1],
        duration: 1600,
        delay: 600,
        easing: "easeInOutQuart",
      },
      delay: 250,
    });
  }, []);
  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.hero__row}>
          <div className={style.hero__text}>
            <Title fontSize={67} mb={20}>
              Discover digital art & Collect NFTs
            </Title>
            <Text t_transform="capitalize" mb={30}>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </Text>
            <Button icon="getStated" mb={30}>
              Get Started
            </Button>
            <StatisticList />
          </div>
          <div className={style.hero__post}>
            <div className={style.post} ref={PostHero}>
              {heroPost && <Post isPostData={false} post={...heroPost} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
