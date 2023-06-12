import React from "react";
import Title from "../../components/Title/Title.tsx";
import Header from "../../components/Header/Header.tsx";
import styles from "./Home.module.scss";
import MainSkills from "../../components/MainSkills/MainSkills.tsx";
import Contact from "../../components/Contact/Contact.tsx";
import MainContent from "../../components/MainContent/MainContent.tsx";

const headerProps = {
  Home: "/",
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
