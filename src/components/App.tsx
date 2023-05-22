import React from "react";
import Title from "./Title.tsx";
import Header from "./Header.tsx";
import Icon from "./Icon.tsx";

import styles from "../css/App.module.css";

const App = (): React.ReactElement => {
  return (
    <>
      <div className={styles.header}>
        <Header Home="#" About="#" Experience="#" Works="#" Contact="#" />
      </div>

      <div className={styles.title}>
        <Title
          name="Tan Juay Hee"
          desc="aspiring game developer, storyteller, artist"
        />
      </div>

      <div className={styles.icon}>
        <Icon />
      </div>
    </>
  );
};

export default App;
