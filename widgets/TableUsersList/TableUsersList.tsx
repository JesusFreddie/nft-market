"use client";
import { $UsersStore } from "@/store/Users/UsersStore";
import { useUnit } from "effector-react";

import "./table.scss";
import Image from "next/image";

import userAvatar from "@/data/users/images";

const TableUsersList = () => {
  const usersStore = useUnit($UsersStore);

  return (
    <table>
      <thead className="bodyTable">
        <tr className="head">
          <th className="id-none">#</th>
          <th>Artist</th>
          <th>Change</th>
          <th>NFTs Sold</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody className="bodyTable">
        {usersStore.map((user) => (
          <tr key={user.id}>
            <th scope="row" className="id">
              {user.id}
            </th>
            <td className="userName">
              <Image src={userAvatar[user.id - 1]} />
              {user.name}
            </td>
            <td className="change">{user.Change}</td>
            <td>{user.nftSold}</td>
            <td>{user.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUsersList;
