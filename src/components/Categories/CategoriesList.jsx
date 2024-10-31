import styles from "./CategoriesList.module.scss";
import { SingleCategory } from "../Categories/SingleCategory";
import { categories } from "../../data/data";

export function CategoriesList() {
  return (
    <div className={styles.container}>
      {categories.map(category => (
        <SingleCategory key={category.name} category={category} className={styles.card} />
      ))}
    </div>
  );
}
