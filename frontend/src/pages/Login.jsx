import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../router/consts";
import styles from "./Login.module.scss";
import stylesButton from "../components/LoginButton/LoginButton.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    login({ email, password });
    navigate(ROUTES.HOME);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Please type your email"
          className={styles.input}
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Please type your password"
          className={styles.input}
          required
        />
        <button type="submit" className={stylesButton.button}>
          Log in
        </button>
        <div className={styles.link}>
          <Link to={ROUTES.REGISTER} className={styles.signUp}>
            Do not have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
