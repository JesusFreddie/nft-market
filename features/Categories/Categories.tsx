import { Title } from "@/shared/ui/UI";
import style from "./categories.module.scss";
import Categorie from "@/widgets/categorie/Categorie";
import CategoriesList from "@/widgets/categorieList/CategoriesList";

const Categories = () => {
  return (
    <div className={style.categories}>
      <div className="container">
        <div className={style.categories__row}>
          <Title>Browse Categories</Title>
          <CategoriesList />
        </div>
      </div>
    </div>
  );
};

export default Categories;
