import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import GalleryFrame from "../GalleryFrame/GalleryFrame.tsx";

const imgs: React.ReactElement[] = [
  <GalleryFrame imagePath="IMAGE 1"></GalleryFrame>,
  <GalleryFrame imagePath="IMAGE 2"></GalleryFrame>,
  <GalleryFrame imagePath="IMAGE 3"></GalleryFrame>,
];

function Gallery(): React.ReactElement {
  const [currentFrame, setFrame] = useState(0);

  function handleLeftButtonClick() {
    setFrame(currentFrame - 1);
  }

  function handleRightButtonClick() {
    setFrame(currentFrame + 1);
  }

  return (
    <>
      <div className={styles.galleryContainer}>
        <button className={styles.leftButton} onClick={handleLeftButtonClick}>
          LEFT
        </button>
        <div className={styles.gallery}>{imgs[currentFrame]}</div>
        <button className={styles.rightButton} onClick={handleRightButtonClick}>
          RIGHT
        </button>
      </div>
    </>
  );
}

export default Gallery;
