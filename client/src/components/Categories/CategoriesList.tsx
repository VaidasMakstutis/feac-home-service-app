import { useCategories } from "./hooks";
import { CategoryCard } from "./CategoryCard";
import styles from "./CategoriesList.module.scss";

export function CategoriesList() {
  const { data: categories } = useCategories();

  return (
    <div className={styles.container}>
      {categories?.map(category => (
        <CategoryCard key={category.name} category={category} className={styles.card} />
      ))}
    </div>
  );
}
