import React from "react";
import styles from "../css/Header.module.css";

type HeaderProps = {
  [label: string]: string;
};
const Header = (props: HeaderProps): React.ReactElement => {
  const labels = Object.keys(props);
  const urls = Object.values(props);

  const length = labels.length;
  const rows = [];

  for (let i = 0; i < length; i++) {
    // Labels will always be unique so just use as keys as well for convenience
    rows.push(
      <div className={styles.container}>
        <a key={labels[i]} className={styles.a} href={urls[i]}>
          {labels[i]}
        </a>
        <div className={`${styles.background} ${styles.absoluteCentre}`}></div>
      </div>
    );
  }

  return <div className={styles.headerRoot}>{rows}</div>;
};
export default Header;
