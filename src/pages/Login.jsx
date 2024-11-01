import { Link } from "react-router-dom";
import { ROUTES } from "../router/consts";
import styles from "./Login.module.scss";
import stylesButton from "../components/LoginButton/LoginButton.module.scss";

export function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <input type="email" placeholder="Please type your email" className={styles.input} required />
        <input type="password" placeholder="Please type your password" className={styles.input} required />
        <button className={stylesButton.button}>Log in</button>
        <div className={styles.link}>
          <Link to={ROUTES.REGISTER} className={styles.signUp}>
            Do not have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
