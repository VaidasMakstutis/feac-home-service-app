import { Outlet } from "react-router-dom";
import { Topbar } from "../Topbar/Topbar";
import styles from "./AuthLayout.module.scss";

export const AuthLayout = () => {
  return (
    <>
      <Topbar />
      <div className={styles.authContainer}>
        <Outlet />
      </div>
    </>
  );
};
