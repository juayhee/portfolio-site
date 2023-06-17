import styles from "./GalleryFrame.module.scss";
import { motion, AnimatePresence } from "framer-motion";

function GalleryFrame({
  newFrameIndex,
  clickDirection,
  images,
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
      <AnimatePresence mode="popLayout" custom={clickDirection}>
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
