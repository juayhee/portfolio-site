import React from "react";
import styles from "./GalleryFrame.module.scss";
import { motion } from "framer-motion";

function GalleryFrame({ imagePath }: GalleryFrameProps): React.ReactElement {
  return (
    <>
      <motion.div
        className={styles.galleryFrameContainer}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
      >
        {imagePath}
      </motion.div>
    </>
  );
}

export default GalleryFrame;
