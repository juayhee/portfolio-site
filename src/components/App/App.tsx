import React from "react";
import Title from "../Title/Title.tsx";
import Header from "../Header/Header.tsx";
import styles from "./App.module.sass";
import Content from "../Content/Content.tsx";
import MainSkills from "../MainSkills/MainSkills.tsx";
import Contact from "../Contact/Contact.tsx";

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
