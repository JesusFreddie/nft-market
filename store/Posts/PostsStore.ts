import { createEffect, createEvent, createStore } from "effector";

import postsData from '@/data/posts/posts.json'

export const $PostsStore = createStore([])

export const getPostsFx = createEffect(async () => {
	try {
		return await postsData
	} catch (err) {
		throw err
	}
})

$PostsStore
	.on(getPostsFx.doneData, (state, posts) => posts)

getPostsFx();