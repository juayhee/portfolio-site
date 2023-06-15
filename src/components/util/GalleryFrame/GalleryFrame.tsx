import React, { useEffect, useState } from "react";
import styles from "./GalleryFrame.module.scss";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "./sample_images/image1.jpg";
import image2 from "./sample_images/image2.jpg";
import image3 from "./sample_images/image3.jpg";
import { Simulate } from "react-dom/test-utils";
import click = Simulate.click;

const images: string[] = [image1, image2, image3]; // URL of images

function GalleryFrame({
  newFrameIndex,
  clickDirection,
}: GalleryFrameProps): React.ReactElement {
  const frameVariants = {
    centre: {
      x: 0,
      opacity: 1,
    },

    // Determining direction of entry of frame based on latest click direction state
    enter: (custom: string | null) => {
      return {
        x: custom === "next" ? "100%" : "-100%",
        opacity: 0,
      };
    },

    // Determining direction of exit of frame based on latest click direction state
    exit: (custom: string | null) => {
      return {
        x: custom === "next" ? "-100%" : "100%",
        opacity: 0,
      };
    },
  };

  return (
    <>
      <AnimatePresence mode="wait" custom={clickDirection}>
        <motion.div
          key={newFrameIndex}
          className={styles.galleryFrameContainer}
          variants={frameVariants}
          initial="enter"
          animate="centre"
          exit="exit"
          custom={clickDirection}
        >
          <img src={images[newFrameIndex]} alt="img" className={styles.img} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default GalleryFrame;
