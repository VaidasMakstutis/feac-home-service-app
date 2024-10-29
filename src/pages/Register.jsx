import { Link } from "react-router-dom";
import { ROUTES } from "../router/consts";
import styles from "./Login.module.scss";
import stylesButton from "../components/LoginButton.module.scss";

export function Register() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        <input type="name" placeholder="Please type your name" className={styles.input} required />
        <input type="email" placeholder="Please type your email" className={styles.input} required />
        <input type="password" placeholder="Please type your password" className={styles.input} required />
        <button className={stylesButton.button}>Register</button>
        <div className={styles.link}>
          <Link to={ROUTES.LOGIN} className={styles.signUp}>
            Already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
}
