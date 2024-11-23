import { useState, useEffect } from "react";
import { Category } from "./types";
import { getCategories } from "./api";
import { CategoryCard } from "./CategoryCard";
import styles from "./CategoriesList.module.scss";

export function CategoriesList() {
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
    <div className={styles.container}>
      {categories.map(category => (
        <CategoryCard key={category.name} category={category} bgcolor={category.bgcolor} className={styles.card} />
      ))}
    </div>
  );
}
