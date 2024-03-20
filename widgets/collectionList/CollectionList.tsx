import { useUnit } from "effector-react";
import style from "./collectionList.module.scss";
import { $CollectionsStore } from "@/store/Collection/CollectionStore";
import { useEffect, useState } from "react";
import Collection from "../collection/Collection";

const CollectionList = ({ limit = 3 }) => {
  const [collections, setCollections] = useState([]);

  const collectionStore = useUnit($CollectionsStore);

  useEffect(() => {
    const collectionLimit =
      limit > collectionStore.length ? collectionStore.length : limit;
    const collectionsList = [];
    for (let i = 0; i < collectionLimit; i++) {
			collectionsList.push(collectionStore[i])
		}
		setCollections(collectionsList)
  }, []);

  return <div className={style.collectionList}>
		{collections &&
			collections.map((collection) => <Collection key={collection.id} data={collection}/> )
		}
	</div>;
};

export default CollectionList;
