"use client";
import PreviewPosts from "@/features/PreviewPosts/PreviewPosts";
import PostsList from "@/widgets/PostsList/PostsList";

import style from "./marketplace.module.scss";
import { Text, Title } from "@/shared/ui/UI";
import Image from "next/image";

import seatchIcon from "@/images/icons/search.svg";

const Marketplace = () => {
  return (
    <main>
      <div className="container">
        <div className={style.marketplace}>
          <div className={style.text}>
            <Title fontSize={51} mb={10}>
              Browse Marketplace
            </Title>
            <Text mb={30}>
              Browse through more than 50k NFTs on the NFT Marketplace.
            </Text>

            <label className={style.search}>
              <input type="text" placeholder="Search your favourite NFTs" />
              <Image src={seatchIcon} alt="search" />
            </label>
          </div>

          <div className={style.checkeds}>
            <label>
              {" "}
              <span>NFTs</span> <input type="radio" name="post" />
            </label>
            <label>
              {" "}
              <span>Collections</span> <input type="radio" name="post" />
            </label>
          </div>
        </div>
      </div>
      <div className={style.posts}>
        <div className="container">
          <PostsList bgColor='#2B2B2B'/>
        </div>
      </div>
    </main>
  );
};

export default Marketplace;
