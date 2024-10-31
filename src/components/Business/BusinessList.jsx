import styles from "./BusinessList.module.scss";
import { SingleBusiness } from "./SingleBusiness";
import { businesses } from "../../data/data";

export function BusinessList() {
  return (
    <section className={styles.businesses}>
      <h2>Popular Businesses</h2>
      <div className={styles.businessesContainer}>
        <SingleBusiness businesses={businesses} />
      </div>
    </section>
  );
}
