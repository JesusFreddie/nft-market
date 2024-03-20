import { createEffect, createStore } from "effector";

import categoriesData from '@/data/categories/categories.json'

export const $CategoriesStore = createStore([])

export const getCategoriesFx = createEffect(async () => {
	try {
		const response = await categoriesData
		return response
	} catch (err) {
		throw err
	}
})

$CategoriesStore
	.on(getCategoriesFx.doneData, (state, categories) => categories)

getCategoriesFx();