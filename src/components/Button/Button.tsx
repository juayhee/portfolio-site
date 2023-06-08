import { motion } from "framer-motion";
import styles from "./Button.module.scss";
import React from "react";

// framer-motion variants
const buttonVariantsRed = {
  initial: {
    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#f45858",
  },
  hover: {
    backgroundColor: "#ef6767",
  },
  tap: {
    boxShadow: "0px -2px 1px #5f7081",
    backgroundColor: "#d04949",
    scale: 0.97,
    transformOrigin: "center center",
  },
};

const buttonVariantsLight = {
  initial: {
    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#f7f8f8",
  },
  hover: {
    backgroundColor: "#ffffff",
  },
  tap: {
    boxShadow: "0px -2px 1px #821717", // Inner shadow setting
    backgroundColor: "#f7f7f8",
    scale: 0.99,
    transformOrigin: "center center",
  },
};

const defaultTransition = {
  type: "tween",
  duration: 0.1,
  ease: "easeInOut",

  boxShadow: {
    type: "tween",
    duration: 0.1,
    ease: "easeInOut",
  },
};

function Button({
  buttonText,
  buttonType,
  buttonStyle,
  buttonColorType,
}: ButtonProps): React.ReactElement {
  return (
    <motion.button
      // HTML/CSS props
      type={buttonType}
      className={buttonStyle}
      // Motion props
      variants={
        buttonColorType === "red" ? buttonVariantsRed : buttonVariantsLight
      }
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={defaultTransition}
    >
      {buttonText}
    </motion.button>
  );
}

export default Button;
