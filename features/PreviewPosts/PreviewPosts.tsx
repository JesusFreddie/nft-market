import PostsList from "@/widgets/PostsList/PostsList";

import style from "./previewPosts.module.scss";
import { Button, Text, Title } from "@/shared/ui/UI";
import { usePathname } from "next/navigation";

const PreviewPosts = () => {
  const pathname = usePathname();

  return (
    <div className={style.previewPosts}>
      <div className="container">
        <div className={style.previewPosts__row}>
          <div className={style.text}>
            <div className={style.title}>
              <Title>Discover More NFTs</Title>
              <Text>Explore new trending NFTs</Text>
            </div>
            {pathname === "/" && (
              <Button bg="inherit" icon="see">
                See All
              </Button>
            )}
          </div>
          <PostsList />
        </div>
      </div>
    </div>
  );
};

export default PreviewPosts;
