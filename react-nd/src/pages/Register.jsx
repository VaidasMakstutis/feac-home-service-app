import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../router/consts";
import styles from "./Login.module.scss";
import stylesButton from "../components/LoginButton/LoginButton.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export function Register() {
  const { register } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    register({ username, email, password });
    navigate(ROUTES.HOME);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        <input
          type="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Please type your name"
          className={styles.input}
          required
        />
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
          Register
        </button>
        <div className={styles.link}>
          <Link to={ROUTES.LOGIN} className={styles.signUp}>
            Already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
}
