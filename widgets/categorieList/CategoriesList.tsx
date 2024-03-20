import { useUnit } from 'effector-react';
import Categorie from '../categorie/Categorie';
import style from './categoriesList.module.scss'
import { $CategoriesStore } from '@/store/Categories/CategoriesStore';
import { useEffect, useState } from 'react';

const CategoriesList = () => {

	const [ categories, setCategories ] = useState([])

	const Categories = useUnit({
		categoriesStore: $CategoriesStore
	})

	useEffect(() => {
		const categoriesList: Object = []
		Categories.categoriesStore.forEach(categories => {
			categoriesList.push(categories)
		})
		setCategories(categoriesList);
	}, [])

	return ( 
		<div className={style.categoriesList}>
			{ categories && 
				categories.map((categorie) => <Categorie key={categorie.id} data={...categorie}/>)
			}
		</div>
	 );
}
 
export default CategoriesList;