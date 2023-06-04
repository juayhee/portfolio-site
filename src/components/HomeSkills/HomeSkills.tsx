import React from "react";
import styles from "./HomeSkills.module.sass";

type BubbleProps = {
  title: string;
  skillsList: string[];
  className: string;
};

// Content
const frontEnd: BubbleProps = {
  title: "Frontend",
  className: "frontEnd",
  skillsList: ["Javascript", "Typescript", "HTML/CSS"],
};

const backEnd: BubbleProps = {
  title: "Backend",
  className: "backEnd",
  skillsList: ["Python", "Java", "C++"],
};

const more: BubbleProps = {
  title: "...and more",
  className: "more",
  skillsList: [
    "Video editing",
    "Photo editing",
    "Storyboarding",
    "Music",
  ],
};

// End of content

function Bubble(props: BubbleProps): React.ReactElement {
  const { title, skillsList, className } = props;
  return (
    <>
      <div className={`${styles.bubbleContainer} ${styles[className]}`}>
        <div className={styles.bubbleTitle}>{title}</div>
        <div className={styles.bubbleContent}>
          <ul>
            {skillsList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function HomeSkills(): React.ReactElement {
  return (
    <>
      <div className={styles.bubblesGrid}>
        <Bubble {...frontEnd} />
        <Bubble {...backEnd} />
        <Bubble {...more} />
      </div>
    </>
  );
}

export default HomeSkills;
