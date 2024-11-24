import { CategoryCard } from "./CategoryCard";
import { useCategories } from "./hooks";
import styles from "./VerticalCategoriesList.module.scss";

export function VerticalCategoriesList() {
  const { data: categories } = useCategories();

  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories?.map(category => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
}
