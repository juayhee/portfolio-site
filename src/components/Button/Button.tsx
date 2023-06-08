import { motion } from "framer-motion";
import styles from "./Button.module.scss";
import React from "react";

// framer-motion variants
const buttonVariants = {
  initial: {
    boxShadow: "1px 2px 2px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#f45858",
  },
  hover: {
    backgroundColor: "#ef6767",
  },
  tap: {
    boxShadow: "inset 0px -2px 3px #f45858",
    backgroundColor: "#d04949",
    scale: 0.97,
    transformOrigin: "center center",
  },
};

const defaultTransition = {
  type: "tween",
  duration: 0.1,
  ease: "easeInOut",
};

// Type declarations
type ButtonProps = {
  buttonText: string;
  buttonType?: "button" | "submit" | "reset";
};

function Button({ buttonText, buttonType }: ButtonProps): React.ReactElement {
  return (
    <motion.button
      type={buttonType}
      className={styles.submitButton}
      variants={buttonVariants}
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
