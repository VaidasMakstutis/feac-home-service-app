import styles from "./Topbar.module.scss";
import Logo from "../assets/logo.svg";
import { LoginButton } from "./LoginButton";

export function Topbar() {
  const links = [
    {
      href: "/",
      label: "Home"
    },
    {
      href: "/services",
      label: "Services"
    },
    {
      href: "/about-me",
      label: "About Us"
    }
  ];

  return (
    <header className={styles.topbar}>
      <div className={styles.leftSide}>
        <img src={Logo} alt="logo" />
        <nav className={styles.navigation}>
          {links.map(link => (
            <a href={link.href} className={styles.link} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className={styles.rightSide}>
        <LoginButton />
      </div>
    </header>
  );
}
