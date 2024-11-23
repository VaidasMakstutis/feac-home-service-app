import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../router/consts";
import styles from "./Login.module.scss";
import stylesButton from "../components/LoginButton/LoginButton.module.scss";
import { useState } from "react";
import { registerUser } from "../components/users/api";
import { AxiosError } from "axios";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      navigate(ROUTES.HOME);
    } catch (error) {
      const errorMsg = error as AxiosError<{ message: string }>;
      console.error(errorMsg);
      setError(errorMsg.response?.data.message ?? "");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        <input
          type="username"
          value={name}
          onChange={e => setName(e.target.value)}
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
