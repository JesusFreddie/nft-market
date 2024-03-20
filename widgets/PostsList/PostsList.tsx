import { useUnit } from "effector-react";
import style from "./postsList.module.scss";
import { $PostsStore } from "@/store/Posts/PostsStore";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Post from "../Post/Post";

const PostsList = ({ limit = 3, bgColor }) => {
  const pathname = usePathname();

  const [posts, setPosts] = useState([]);

  const PostsStore = useUnit($PostsStore);

  useEffect(() => {
    let limitPost = limit;
    const postsList = [];
    if (PostsStore) {
      if (pathname === "/marketplace") limitPost = PostsStore.length;
      for (let i = 0; i < limitPost; i++) {
        postsList.push(PostsStore[i]);
      }
      setPosts(postsList);
    }
  }, []);

  return (
    <div className={style.postsList}>
      {posts && posts.map((post) => <Post bgColor={bgColor} key={post.id} post={post} />)}
    </div>
  );
};

export default PostsList;
