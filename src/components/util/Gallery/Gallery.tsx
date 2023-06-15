import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import GalleryFrame from "../GalleryFrame/GalleryFrame.tsx";
import { Simulate } from "react-dom/test-utils";
import click = Simulate.click;

function Gallery(): React.ReactElement {
  const [newFrameIndex, setNewFrameIndex] = useState(0);
  const [clickDirection, setClickDirection] = useState<string | null>(null);

  function handlePrevButtonClick() {
    setNewFrameIndex(newFrameIndex - 1);
    setClickDirection("prev");
  }

  function handleNextButtonClick() {
    setNewFrameIndex(newFrameIndex + 1);
    setClickDirection("next");
  }

  return (
    <>
      <div className={styles.galleryContainer}>
        <button className={styles.button} onClick={handlePrevButtonClick}>
          <img
            src="/src/components/util/Gallery/icons/left_arrow.svg"
            alt="previous"
          />
        </button>
        <div className={styles.gallery}>
          {
            <GalleryFrame
              newFrameIndex={newFrameIndex}
              clickDirection={clickDirection}
            />
          }
        </div>
        <button className={styles.button} onClick={handleNextButtonClick}>
          <img
            src="/src/components/util/Gallery/icons/right_arrow.svg"
            alt="next"
          />
        </button>
      </div>
    </>
  );
}

export default Gallery;
