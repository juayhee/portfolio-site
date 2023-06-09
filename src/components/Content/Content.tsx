import React from "react";
import styles from "./Content.module.scss";

function Content(): React.ReactElement {
  return (
    <>
      <div className={styles.contentGrid}>
        <div className={styles.content}>
          <h1 className={styles.h1}>Content title</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Content;
