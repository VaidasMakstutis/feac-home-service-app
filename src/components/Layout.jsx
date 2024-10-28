import styles from "./Layout.module.scss";
import { Hero } from "./Hero";
import { InputSearch } from "./InputSearch";
import { CategoriesList } from "./CategoriesList";
import { BusinessesList } from "./BusinessesList";

export function Layout() {
  return (
    <section className={styles.container}>
      <Hero />
      <InputSearch />
      <CategoriesList />
      <BusinessesList />
    </section>
  );
}
