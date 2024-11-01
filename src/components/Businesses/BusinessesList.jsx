import styles from "./BusinessesList.module.scss";
import { BusinessCard } from "./BusinessCard";
import { businesses } from "../../data/data";
import classNames from "classnames";

export function BusinessesList({ categoryName, className }) {
  const filteredBusinesses = categoryName ? businesses.filter(business => business.category === categoryName) : businesses;

  return (
    <section className={classNames(styles.businessesContainer, className)}>
      {filteredBusinesses.length === 0 ? (
        <h2 className={styles.servicesNotFound}>Services Not Found!</h2>
      ) : (
        filteredBusinesses.map(business => <BusinessCard key={business.id} business={business} />)
      )}
    </section>
  );
}
