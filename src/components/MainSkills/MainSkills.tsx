import React from "react";
import styles from "./MainSkills.module.scss";

// Frontend logo imports
import javaScriptLogo from "../../resources/MainSkills_icons/javascript.svg";
import typeScriptLogo from "../../resources/MainSkills_icons/typescript.svg";
import cssLogo from "../../resources/MainSkills_icons/css.svg";
import htmlLogo from "../../resources/MainSkills_icons/html.svg";

// Backend logo imports
import pythonLogo from "../../resources/MainSkills_icons/python.svg";
import javaLogo from "../../resources/MainSkills_icons/java.svg";
import cppLogo from "../../resources/MainSkills_icons/cpp.svg";

// More logo imports
import musicLogo from "../../resources/MainSkills_icons/music.svg";
import photoshopLogo from "../../resources/MainSkills_icons/photoshop.svg";
import premiereLogo from "../../resources/MainSkills_icons/premiere_pro.svg";
import Button from "../util/Button/Button.tsx";

// Content
const frontEnd: BubbleProps = {
  title: "Frontend",
  className: "frontEnd",
  skillsList: ["Javascript", "Typescript", "HTML", "CSS"],
  skillsIconList: [javaScriptLogo, typeScriptLogo, htmlLogo, cssLogo],
};

const backEnd: BubbleProps = {
  title: "Backend",
  className: "backEnd",
  skillsList: ["Python", "Java", "C++"],
  skillsIconList: [pythonLogo, javaLogo, cppLogo],
};

const more: BubbleProps = {
  title: "...and more",
  className: "more",
  skillsList: ["Video editing", "Photo editing", "Music"],
  skillsIconList: [premiereLogo, photoshopLogo, musicLogo],
};

// End of content

function Bubble(props: BubbleProps): React.ReactElement {
  const { title, className, skillsList, skillsIconList } = props;
  return (
    <>
      <div className={`${styles.bubbleContainer} ${styles[className]}`}>
        <div className={styles.bubbleTitle}>{title}</div>
        <div className={styles.bubbleContent}>
          <ul>
            {skillsList.map((skill, index) => (
              <li key={index}>
                <img src={skillsIconList[index]} />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function MainSkills(): React.ReactElement {
  return (
    <>
      <div className={styles.skillsContainer}>
        <Button
          buttonLink="/skills"
          buttonText="Learn more"
          buttonStyle={styles.buttonStyle}
          buttonColorType="red"
        />
        <div className={styles.bubblesContainer}>
          <Bubble {...frontEnd} />
          <Bubble {...backEnd} />
          <Bubble {...more} />
        </div>
      </div>
    </>
  );
}

export default MainSkills;
