import { Category } from "../Categories/types";
import { useBusinesses } from "./hooks";
import { BusinessCard } from "./BusinessCard";
import classNames from "classnames";
import styles from "./BusinessesList.module.scss";

type BusinessesListProps = {
  categoryName?: Category["name"];
  className?: string;
};

export function BusinessesList({ categoryName, className }: BusinessesListProps) {
  const { data } = useBusinesses();
  const businesses = data ?? [];

  const filteredBusinesses = categoryName ? businesses.filter(business => business.category === categoryName) : businesses;

  return (
    <section className={classNames(styles.businessesContainer, className)}>
      {filteredBusinesses.length === 0 ? (
        <h3 className={styles.servicesNotFound}>Services Not Found!</h3>
      ) : (
        filteredBusinesses.map(business => <BusinessCard key={business.name} business={business} />)
      )}
    </section>
  );
}
