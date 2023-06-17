import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import GalleryFrame from "../GalleryFrame/GalleryFrame.tsx";

import image1 from "./sample_images/image1.jpg";
import image2 from "./sample_images/image2.jpg";
import image3 from "./sample_images/image3.jpg";

const images: string[] = [image1, image2, image3]; // URL of images

function Gallery(): React.ReactElement {
  const [newFrameIndex, setNewFrameIndex] = useState(0);
  const [clickDirection, setClickDirection] = useState<string | null>(null);

  function handlePrevButtonClick() {
    if (newFrameIndex - 1 < 0) {
      // Check if frame index is out of lower bound
      //pass
    } else {
      setNewFrameIndex(newFrameIndex - 1);
      setClickDirection("prev");
    }
  }

  function handleNextButtonClick() {
    if (newFrameIndex + 1 > images.length - 1) {
      // Check if frame index is out of upper bound
      //pass
    } else {
      setNewFrameIndex(newFrameIndex + 1);
      setClickDirection("next");
    }
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
              images={images}
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
