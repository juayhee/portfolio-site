import React from "react";
import styles from "./Title.module.sass";

function Title(): React.ReactElement {
  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.name}>Tan Juay Hee</div>
        <div className={styles.description}>
          aspiring game developer, storyteller, artist
        </div>
      </div>
    </>
  );
}

export default Title;
