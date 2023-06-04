import React from "react";
import styles from "./MainSkills.module.sass";

import javaScriptLogo from "../../assets/MainSkills_icons/javascript.svg";
import typeScriptLogo from "../../assets/MainSkills_icons/typescript.svg";
import cssLogo from "../../assets/MainSkills_icons/css.svg";
import htmlLogo from "../../assets/MainSkills_icons/html.svg";

type BubbleProps = {
  title: string;
  className: string;
  skillsList: string[];
  skillsIconList: string[];
};

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
  skillsIconList: [],
};

const more: BubbleProps = {
  title: "...and more",
  className: "more",
  skillsList: ["Video editing", "Photo editing", "Storyboarding", "Music"],
  skillsIconList: [],
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
      <div className={styles.bubblesContainer}>
        <Bubble {...frontEnd} />
        <Bubble {...backEnd} />
        <Bubble {...more} />
      </div>
    </>
  );
}

export default MainSkills;
