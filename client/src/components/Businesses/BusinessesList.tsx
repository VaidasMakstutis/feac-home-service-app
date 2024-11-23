import { useState, useEffect } from "react";
import { Category } from "../Categories/types";
import { Business } from "./types";
import { getBusinesses } from "./api";
import classNames from "classnames";
import { BusinessCard } from "./BusinessCard";
import styles from "./BusinessesList.module.scss";

type BusinessesListProps = {
  categoryName?: Category["name"];
  className?: string;
};

export function BusinessesList({ categoryName, className }: BusinessesListProps) {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    getBusinesses()
      .then(response => {
        setBusinesses(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const filteredBusinesses = categoryName ? businesses.filter(business => business.category === categoryName) : businesses;

  return (
    <section className={classNames(styles.businessesContainer, className)}>
      {filteredBusinesses.length === 0 ? (
        <h3 className={styles.servicesNotFound}>Services Not Found!</h3>
      ) : (
        filteredBusinesses.map(business => <BusinessCard key={business.id} business={business} />)
      )}
    </section>
  );
}
