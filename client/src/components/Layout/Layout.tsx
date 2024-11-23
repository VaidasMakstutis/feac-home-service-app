import styles from "./Layout.module.scss";
import { Topbar } from "../Topbar/Topbar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Topbar />
      <section className={styles.container}>
        <Outlet />
      </section>
    </>
  );
}
