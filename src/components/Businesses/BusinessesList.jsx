import styles from "./BusinessesList.module.scss";
import { BusinessCard } from "./BusinessCard";
import { businesses } from "../../data/data";

export function BusinessesList() {
  return (
    <section className={styles.businessesContainer}>
      <BusinessCard businesses={businesses} />
    </section>
  );
}
