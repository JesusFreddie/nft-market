import { $UsersStore } from '@/store/Users/UsersStore';
import style from './usersList.module.scss'
import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';
import User from '../User/User';
import { usePathname } from 'next/navigation';

const UsersList = () => {

	const [users, setUsers] = useState([])

	const pathname = usePathname()

	const Users = useUnit({
		UsersStore: $UsersStore
	})

	useEffect(() => {
		if (Users.UsersStore) {
			const usersList: Object = []
			if (pathname == '/top-creators') {
				for (let i = 0; i <= Users.UsersStore.length; i++) {
					usersList.push(Users.UsersStore[i])
				}
			} else {
				for (let i = 0; i <= 12 - 1; i++) {
					usersList.push(Users.UsersStore[i])
				}
			}
			setUsers(usersList)
		}
	}, [])

	return ( 
		<div className={style.userList}>
			{users &&
				users.map(user => <User key={user.id} user={user}/>)
			}
		</div>
	 );
}
 
export default UsersList;