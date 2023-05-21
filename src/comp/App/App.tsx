import React from "react";
import Title from "../Title/Title.tsx";
import Header from "../Header/Header.tsx";

import styles from "./App.module.css";

const App = (): React.ReactElement => {
  return (
    <>
      <div className={styles.root}>
        <Title
          name="Tan Juay Hee"
          desc="aspiring game developer, storyteller, artist"
        />
      </div>
      <div>
        <Header Home="#" About="#" Experience="#" Works="#" Contact="#" />
      </div>
    </>
  );
};

export default App;
