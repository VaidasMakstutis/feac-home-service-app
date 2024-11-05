import styles from "./Avatar.module.scss";

export const Avatar = ({ children }) => {
  return <div className={styles.avatar}>{children}</div>;
};
