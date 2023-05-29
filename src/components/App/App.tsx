import React from "react";
import Title from "../Title/Title.tsx";
import Header from "../Header/Header.tsx";
import styles from "./App.module.sass";

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
      <Header {...headerProps} />
    </>
  );
};

export default App;
