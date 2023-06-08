import React from "react";
import styles from "./Header.module.scss";
import linkedInLogo from "../../resources/linkedin.svg";
import githubLogo from "../../resources/github.svg";

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
        <div className={styles.links}>{headerArray}</div>
        <div className={styles.space}></div>

        <a
          href="https://www.linkedin.com/in/juayhee/"
          className={styles.linkedInLink}
        >
          <img src={linkedInLogo} alt="LinkedIn" />
        </a>

        <a href="https://github.com/juayhee" className={styles.githubLink}>
          <img src={githubLogo} alt="Github" />
        </a>
      </div>
    </>
  );
}

export default Header;
