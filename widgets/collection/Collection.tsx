import { useEffect, useState } from 'react';
import style from './collection.module.scss'
import { Title } from '@/shared/ui/UI';
import { useUnit } from 'effector-react';
import { $UsersStore } from '@/store/Users/UsersStore';
import { $PostsStore } from '@/store/Posts/PostsStore';
import Post from '../Post/Post';
import Image from 'next/image';

import avatarUser from '@/data/users/images'

const Collection = ({data}) => {

	const userStore = useUnit($UsersStore)
	const postsStore = useUnit($PostsStore)

	const [postsList, setPostsList] = useState([])
	const [user, setUser] = useState([])

	const { name, idUser, idPosts } = data;
	useEffect(() => {
		setPostsList(postsStore.filter((post) => idPosts.includes(post.id)))
		setUser(userStore[idUser - 1])
	}, [])
	return ( 
		<div className={style.card}>
			<div className={style.posts}>
				{
					postsList.map((post) => <Post key={post.id} post={post} imgOnly={true}/>)
				}
				<div className={style.all}>1025+</div>
			</div>
			<Title mb={10} level={3}>{name}</Title>
			<p className={style.autor}>
				<Image src={avatarUser[idUser - 1]} alt='user avatar'/>
				{user && user.name}
			</p>
		</div>
	 );
}
 
export default Collection;