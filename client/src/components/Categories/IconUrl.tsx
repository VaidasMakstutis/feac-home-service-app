import { CSSProperties } from "react";
import classNames from "classnames";
import styles from "./IconUrl.module.scss";

type IconUrlProps = {
  icon: string;
  style?: CSSProperties;
  className?: string;
};

export function IconUrl({ icon, className, style = {} }: IconUrlProps) {
  return (
    <div
      data-testid="icon-url"
      className={classNames(styles.icon, className)}
      style={{
        maskImage: `url(${icon})`,
        WebkitMaskImage: `url(${icon})`,
        ...style
      }}
    />
  );
}
