import { BusinessesList } from "../components/Businesses/BusinessesList";
import { VerticalCategoriesList } from "../components/Categories/VerticalCategoriesList";
import styles from "./SearchCategory.module.scss";
import { useParams } from "react-router-dom";

export const SearchCategory = () => {
  const { category } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <VerticalCategoriesList />
      </div>
      <div className={styles.CategoryContainer}>
        <h2 className={styles.title}>{category}</h2>
        <BusinessesList categoryName={category} className={styles.businessList} />
      </div>
    </div>
  );
};
