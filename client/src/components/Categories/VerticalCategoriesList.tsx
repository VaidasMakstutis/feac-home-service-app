import { useState, useEffect } from "react";
import { CategoryCard } from "./CategoryCard";
import { Category } from "./types";
import { getCategories } from "./api";
import styles from "./VerticalCategoriesList.module.scss";

export function VerticalCategoriesList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories()
      .then(response => {
        setCategories(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories.map(category => (
        <CategoryCard className={styles.verticalCard} key={category.name} category={category} bgcolor={category.bgcolor} />
      ))}
    </div>
  );
}
