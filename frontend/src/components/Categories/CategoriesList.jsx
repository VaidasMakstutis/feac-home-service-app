import styles from "./CategoriesList.module.scss";
import { CategoryCard } from "../Categories/CategoryCard";
import { categories } from "../../data/data";

export function CategoriesList() {
  return (
    <div className={styles.container}>
      {categories.map(category => (
        <CategoryCard key={category.name} category={category} className={styles.card} />
      ))}
    </div>
  );
}
