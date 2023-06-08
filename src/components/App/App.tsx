import React from "react";
import Title from "../Title/Title.js";
import Header from "../Header/Header.js";
import styles from "./App.module.scss";
import Content from "../Content/Content.js";
import MainSkills from "../MainSkills/MainSkills.js";
import Contact from "../Contact/Contact.js";

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
        <Title />
      </div>
      <div className={styles.contentContainer}>
        <Content />
      </div>
      <div className={styles.contentSkillsSpacing} />
      <div className={styles.skillsContainer}>
        <MainSkills />
      </div>
      <div className={styles.mainSkillsContactSpacing} />
      <div className={styles.contactContainer}>
        <Contact />
      </div>
    </>
  );
};

export default App;
