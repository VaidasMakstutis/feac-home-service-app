import styles from "./CategoriesList.module.scss";
import { SingleCategory } from "./SingleCategory";
import { categories } from "../consts/data";

export function CategoriesList() {
  return (
    <section className={styles.categoriesContainer}>
      <SingleCategory categories={categories} />
    </section>
  );
}
