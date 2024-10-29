import styles from "./LoginButton.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../router/consts";

export function LoginButton() {
  const navigate = useNavigate();
  return (
    <button className={styles.button} onClick={() => navigate(ROUTES.LOGIN)}>
      Login / Sign Up
    </button>
  );
}
