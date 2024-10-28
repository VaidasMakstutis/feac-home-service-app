import styles from "./BusinessesList.module.scss";
import { SingleBusiness } from "./SingleBusiness";
import { businesses } from "../consts/data";

export function BusinessesList() {
  return (
    <section className={styles.businesses}>
      <h2>Popular Businesses</h2>
      <div className={styles.businessesContainer}>
        <SingleBusiness businesses={businesses} />
      </div>
    </section>
  );
}
