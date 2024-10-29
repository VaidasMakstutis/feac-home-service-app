import styles from "./Layout.module.scss";
import { Hero } from "./Hero";
import { InputSearch } from "./InputSearch";
import { CategoriesList } from "./CategoriesList";
import { BusinessesList } from "./BusinessesList";
import { Topbar } from "./Topbar";

export function Layout() {
  return (
    <section className={styles.container}>
      <Topbar />
      <Hero />
      <InputSearch />
      <CategoriesList />
      <BusinessesList />
    </section>
  );
}
