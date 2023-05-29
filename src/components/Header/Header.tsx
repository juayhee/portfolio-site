import React from "react";
import styles from "./Header.module.sass";
import personalLogo from "../../resources/icon/icon.svg";

type MenuItems = {
  /* Variable number of page labels and their corresponding URLS */
  [label: string]: string;
};

function Header(props: MenuItems): React.ReactElement {
  /* Separate labels:links key value pairs */
  const labelArray: string[] = [];
  const linkArray: string[] = [];

  for (const label in props) {
    labelArray.push(label);
    linkArray.push(props[label]);
  }

  /* Put labels and links into <a> elements and store in array */
  const headerArray: React.ReactElement[] = [];
  for (let i = 0; i < labelArray.length; i++) {
    headerArray.push(
      <a key={labelArray[i]} href={linkArray[i]}>
        {labelArray[i]}
      </a>
    );
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <img src={personalLogo} alt="Icon" />
        <div className={styles.links}>{headerArray}</div>
        <div className={styles.space}></div>
      </div>
    </>
  );
}

export default Header;
