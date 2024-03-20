import { createEffect, createEvent, createStore } from "effector";

import usersData from '@/data/users/users.json'

export const $UsersStore = createStore([])

export const getUsersFx = createEffect(async () => {
	try {
		const response = await usersData
		return response
	} catch (err) {
		throw err
	}
})

$UsersStore
	.on(getUsersFx.doneData, (state, users) => users)

getUsersFx();