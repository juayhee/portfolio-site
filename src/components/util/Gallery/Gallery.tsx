import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import GalleryFrame from "../GalleryFrame/GalleryFrame.tsx";

function Gallery(): React.ReactElement {
  const [currentFrame, setFrame] = useState(0);

  const [clickDirection, setClickDirection] = useState<"left" | "right">(
    "left"
  ); // Arbitrary starting value of "left"

  const imgs: React.ReactElement[] = [
    <GalleryFrame
      imagePath="IMAGE 1"
      clickDirection={clickDirection}
    ></GalleryFrame>,
    <GalleryFrame
      imagePath="IMAGE 2"
      clickDirection={clickDirection}
    ></GalleryFrame>,
    <GalleryFrame
      imagePath="IMAGE 3"
      clickDirection={clickDirection}
    ></GalleryFrame>,
  ];

  function handleLeftButtonClick() {
    setFrame(currentFrame - 1);
    setClickDirection("left");
  }

  function handleRightButtonClick() {
    setFrame(currentFrame + 1);
    setClickDirection("right");
  }

  return (
    <>
      <div className={styles.galleryContainer}>
        <button className={styles.leftButton} onClick={handleLeftButtonClick}>
          <img
            src="/src/resources/Gallery_icons/left_arrow.svg"
            alt="go left"
          />
        </button>
        <div className={styles.gallery}>{imgs[currentFrame]}</div>
        <button className={styles.rightButton} onClick={handleRightButtonClick}>
          <img
            src="/src/resources/Gallery_icons/right_arrow.svg"
            alt="go right"
          />
        </button>
      </div>
    </>
  );
}

export default Gallery;
