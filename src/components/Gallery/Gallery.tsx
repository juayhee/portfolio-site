import React from "react";
import styles from "./Gallery.module.scss";

function Gallery(): React.ReactElement {
  return (
    <>
      <div className={styles.outerGallery}>
        <div className={styles.innerGallery}></div>
      </div>
    </>
  );
}

export default Gallery;
