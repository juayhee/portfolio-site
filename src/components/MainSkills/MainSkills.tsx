import React from "react";
import styles from "./MainSkills.module.scss";

// Frontend logo imports
import javaScriptLogo from "./icons/javascript.svg";
import typeScriptLogo from "./icons/typescript.svg";
import cssLogo from "./icons/css.svg";
import htmlLogo from "./icons/html.svg";

// Backend logo imports
import pythonLogo from "./icons/python.svg";
import javaLogo from "./icons/java.svg";
import cppLogo from "./icons/cpp.svg";

// More logo imports
import musicLogo from "./icons/music.svg";
import photoshopLogo from "./icons/photoshop.svg";
import premiereLogo from "./icons/premiere_pro.svg";
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
