import styles from "../InputSearch/InputSearch.module.scss";
import stylesButton from "../LoginButton/LoginButton.module.scss";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";

export function InputSearch() {
  const [search, setSearch] = useState("");

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <section className={styles.searchContainer}>
      <input className={styles.searchInput} placeholder="Search" value={search} onChange={handleSearch} />
      <button className={stylesButton.button}>
        <HiSearch />
      </button>
    </section>
  );
}
