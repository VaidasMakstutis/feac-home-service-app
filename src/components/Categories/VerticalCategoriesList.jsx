import { SingleCategory } from "./SingleCategory";
import styles from "./VerticalCategoriesList.module.scss";
import { categories } from "../../data/data";

export function VerticalCategoriesList() {
  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories.map(category => (
        <SingleCategory key={category.id} category={category} />
      ))}
    </div>
  );
}
