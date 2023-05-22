import React from "react";
import styles from "../css/Icon.module.css";
import personalIcon from "../resources/icon/icon.svg";

const Icon = (): React.ReactElement => {
  return (
    <>
      {/* This makes the SVG always scale to match the size of its parent*/}
      <img src={personalIcon} alt="Personal Icon" width="100%" height="100%" />
    </>
  );
};

export default Icon;
