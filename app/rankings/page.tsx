'use client'

import UsersList from "@/widgets/UsersList/UsersList";

import style from './Rankings.module.scss'
import { Text, Title } from "@/shared/ui/UI";
import Image from "next/image";
import TableUsersList from "@/widgets/TableUsersList/TableUsersList";

const Rankings = () => {
  return (
    <main>
      <div className="container">
        <div className={style.rankings}>
          <div className={style.text}>
            <Title fontSize={51} mb={10}>
              Browse Marketplace
            </Title>
            <Text mb={30}>
              Browse through more than 50k NFTs on the NFT Marketplace.
            </Text>
          </div>

          <div className={style.checkeds}>
            <label>
              {" "}
              <span>Today</span> <input type="radio" name="post" />
            </label>
            <label>
              {" "}
              <span>This Week</span> <input type="radio" name="post" />
            </label>
            <label>
              {" "}
              <span>This Month</span> <input type="radio" name="post" />
            </label>
            <label>
              {" "}
              <span>All Time</span> <input type="radio" name="post" />
            </label>
          </div>
        </div>
      </div>
      <div className={style.posts}>
        <div className="container">
          <TableUsersList/>
        </div>
      </div>
    </main>
  );
};

export default Rankings;
