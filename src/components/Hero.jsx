import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Find Home
        <span className={styles.primary}> Service/Repair</span>
        <br></br>
        Near You
      </h1>
      <p className={styles.subtitle}>Explore Best Home Service & Repair near you</p>
    </section>
  );
}
