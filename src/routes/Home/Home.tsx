import React from "react";
import Title from "../../components/Title/Title.tsx";
import styles from "./Home.module.scss";
import HomeSkills from "../../components/HomeSkills/HomeSkills.tsx";
import Contact from "../../components/Contact/Contact.tsx";
import HomeContent from "../../components/HomeContent/HomeContent.tsx";
import HomeWorks from "../../components/HomeWorks/HomeWorks.tsx";

const Home = (): React.ReactElement => {
  return (
    <>
      <div className={styles.titleContainer}>
        <Title />
      </div>
      <div className={styles.homeContentContainer}>
        <HomeContent />
      </div>
      <div className={styles.homeContentSkillsSpacing} />
      <div className={styles.homeSkillsContainer}>
        <HomeSkills />
      </div>
      <div className={styles.homeSkillsContactSpacing} />
      <div className={styles.homeWorksContainer}>
        <HomeWorks />
      </div>
      <div className={styles.homeWorksContactSpacing} />
      <div className={styles.homeContactContainer}>
        <Contact />
      </div>
    </>
  );
};

export default Home;
