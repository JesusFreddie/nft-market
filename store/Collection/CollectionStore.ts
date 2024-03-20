import collectionData from "@/data/collection/Collection.json";
import { createEffect, createStore } from "effector";

export const $CollectionsStore = createStore([]);

export const getCollectionsFx = createEffect(async () => {
  try {
		const response = await collectionData;
		return response;
  } catch (error) {
    throw error;
  }
});

$CollectionsStore
	.on(getCollectionsFx.doneData, (state, collection) => collection)

getCollectionsFx();