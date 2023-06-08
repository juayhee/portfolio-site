import { motion } from "framer-motion";
import styles from "./Button.module.scss";
import React from "react";

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

function Button(): React.ReactElement {
  return (
    <motion.button
      type="submit"
      className={styles.submitButton}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={defaultTransition}
    >
      Submit
    </motion.button>
  );
}

export default Button;
