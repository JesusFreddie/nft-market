import { Button, Text, Title } from "@/shared/ui/UI";
import style from "./topCreators.module.scss";
import UsersList from "@/widgets/UsersList/UsersList";

const TopCreators = () => {
  return (
    <div className={style.topCreators}>
      <div className="container">
        <div className={style.topCreators__row}>
          <div className={style.text}>
            <div className={style.title}>
              <Title>Top creators</Title>
              <Text>Checkout Top Rated Creators on the NFT Marketplace</Text>
            </div>
            <Button bg="inherit" icon="getStated">
              View Rankings
            </Button>
          </div>

          <UsersList limit={12} />
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
