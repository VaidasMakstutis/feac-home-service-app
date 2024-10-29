import styles from "./CategoriesList.module.scss";
import { SingleCategory } from "./SingleCategory";
import { categories } from "../data/data";

export function CategoriesList() {
  return (
    <section className={styles.categoriesContainer}>
      <SingleCategory categories={categories} />
    </section>
  );
}
