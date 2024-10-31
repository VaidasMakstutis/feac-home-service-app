import { CategoryCard } from "./CategoryCard";
import styles from "./VerticalCategoriesList.module.scss";
import { categories } from "../../data/data";

export function VerticalCategoriesList() {
  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories.map(category => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
}
