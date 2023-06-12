import React from "react";
import styles from "./GalleryFrame.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const frameVariants = {
  fromLeft: { x: "-100vw" },
  fromRight: { x: "100vw" },
};

function GalleryFrame({
  imagePath,
  clickDirection,
}: GalleryFrameProps): React.ReactElement {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={Math.random()} // TODO: Replace with proper key generation
          className={styles.galleryFrameContainer}
          variants={frameVariants}
          initial={clickDirection === "left" ? "fromLeft" : "fromRight"} // Entry direction
          animate={{ x: 0 }}
          exit={clickDirection === "left" ? "fromRight" : "fromLeft"} // Exit direction
          transition={{ duration: 0.1 }}
        >
          {imagePath}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default GalleryFrame;
