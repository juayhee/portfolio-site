import React from "react";
import Title from "../Title/Title.js";
import Header from "../Header/Header.js";
import styles from "./Home.module.scss";
import MainSkills from "../MainSkills/MainSkills.js";
import Contact from "../Contact/Contact.js";
import MainContent from "../MainContent/MainContent.tsx";
import Button from "../util/Button/Button.tsx";

const headerProps = {
  Home: "/home",
  About: "/about",
  Skills: "/skills",
  Works: "/works",
  Contact: "/contact",
};
const Home = (): React.ReactElement => {
  return (
    <>
      <div className={styles.headerContainer}>
        <Header {...headerProps} />
      </div>
      <div className={styles.titleContainer}>
        <Title />
      </div>
      <div className={styles.contentContainer}>
        <MainContent />
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

export default Home;
