import styles from "./Topbar.module.scss";
import Logo from "../assets/logo.svg";
import { LoginButton } from "./LoginButton";
import { ROUTES } from "../router/consts";
import { Link, useNavigate } from "react-router-dom";

export function Topbar() {
  const navigate = useNavigate();
  const links = [
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

  return (
    <header className={styles.topbar}>
      <div className={styles.leftSide}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="logo" />
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
        <LoginButton onClick={() => navigate(ROUTES.LOGIN)} />
      </div>
    </header>
  );
}
