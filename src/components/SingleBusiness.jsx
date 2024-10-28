import styles from "./SingleBusiness.module.scss";
import PropTypes from "prop-types";

export function SingleBusiness({ businesses }) {
  return (
    <>
      {businesses.map(business => (
        <div key={business.id} className={styles.card}>
          <img className={styles.image} src={business.image} alt={business.title} />
          <div className={styles.cardInfo}>
            <p className={styles.service}>{business.service}</p>
            <h4 className={styles.title}>{business.title}</h4>
            <p className={styles.person}>{business.person}</p>
            <p className={styles.address}>{business.address}</p>
            <button className={styles.button}>Book now</button>
          </div>
        </div>
      ))}
    </>
  );
}

SingleBusiness.propTypes = {
  businesses: PropTypes.array.isRequired
};
