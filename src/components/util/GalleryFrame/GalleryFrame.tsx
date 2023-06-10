import React from "react";
import styles from "./GalleryFrame.module.scss";
import { motion } from "framer-motion";

function GalleryFrame({ imagePath }: GalleryFrameProps): React.ReactElement {
  return (
    <>
      <motion.div
        key={Math.random()} // TODO: Replace with proper key generation
        className={styles.galleryFrameContainer}
        initial={{ x: "-200vw" }}
        animate={{ x: 0 }}
      >
        {imagePath}
      </motion.div>
    </>
  );
}

export default GalleryFrame;
