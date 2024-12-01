import styles from "./Topbar.module.scss";
import Logo from "../../assets/logo.svg";
import { LoginButton } from "../users/LoginButton";
import { ROUTES } from "../../router/consts";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Avatar } from "../users/Avatar";

// eslint-disable-next-line react-refresh/only-export-components
export const links = [
  {
    href: ROUTES.HOME,
    label: "Home"
  },
  {
    href: ROUTES.SERVICES,
    label: "Services"
  },
  {
    href: ROUTES.ABOUT_US,
    label: "About Us"
  }
];

export function Topbar() {
  const { user, logout } = useContext(UserContext);

  return (
    <header className={styles.topbar}>
      <div className={styles.leftSide}>
        <Link to={ROUTES.HOME}>
          <img className={styles.logo} src={Logo} alt="logo" />
        </Link>
        <nav className={styles.navigation}>
          {links.map(link => (
            <Link key={link.label} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.rightSide}>
        {user ? (
          <div onClick={logout}>
            <Avatar>{user.email[0]}</Avatar>
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
}
