import CollectionList from "@/widgets/collectionList/CollectionList";
import style from "./collections.module.scss";
import { Button, Text, Title } from "@/shared/ui/UI";

const Collections = () => {
  return (
    <div className={style.collections}>
      <div className="container">
        <div className={style.collections__row}>
          <div className={style.text}>
            <div className={style.title}>
              <Title>Trending Collection</Title>
              <Text>Checkout our weekly updated trending collection.</Text>
            </div>
          </div>
          <CollectionList />
        </div>
      </div>
    </div>
  );
};

export default Collections;
