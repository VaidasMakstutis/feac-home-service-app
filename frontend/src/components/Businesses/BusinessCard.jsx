import styles from "./BusinessCard.module.scss";

export function BusinessCard({ business }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={business.image} alt={business.title} />
      <div className={styles.cardInfo}>
        <p className={styles.category}>{business.category}</p>
        <h4 className={styles.name}>{business.name}</h4>
        <p className={styles.person}>{business.person}</p>
        <p className={styles.address}>{business.address}</p>
        <button className={styles.button}>Book now</button>
      </div>
    </div>
  );
}
