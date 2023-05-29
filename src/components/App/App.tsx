import React from "react";
import Title from "../Title/Title.tsx";
import Header from "../Header/Header.tsx";
import styles from "./App.module.sass";
import Content from "../Content/Content.tsx";

const headerProps = {
  Home: "#",
  About: "#",
  Skills: "#",
  Works: "#",
  Contact: "#",
};
const App = (): React.ReactElement => {
  return (
    <>
      <div className={styles.headerContainer}>
        <Header {...headerProps} />
      </div>

      <div className={styles.titleContainer}>
        <Title/>
      </div>

      <div className={styles.contentContainer}><Content/></div>
    </>
  );
};

export default App;
