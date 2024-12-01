import styles from "./BusinessCard.module.scss";
import { Business } from "./types";

type BusinessCardProps = {
  business: Business;
};

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className={styles.card}>
      {business.image ? <img className={styles.image} src={business.image} alt={business.name} /> : null}
      <div className={styles.cardInfo}>
        <p className={styles.category}>{business.category}</p>
        <h4 className={styles.name}>{business.name}</h4>
        <p className={styles.description}>{business.description}</p>
        <p className={styles.person}>{business.contactPerson}</p>
        <p className={styles.email}>{business.email}</p>
        <p className={styles.address}>{business.address}</p>
        <button className={styles.button}>Book now</button>
      </div>
    </div>
  );
}
