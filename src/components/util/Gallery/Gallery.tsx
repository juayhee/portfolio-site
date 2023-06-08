import React from "react";
import styles from "./Gallery.module.scss";
import GalleryFrame from "../GalleryFrame/GalleryFrame.tsx";

function Gallery(): React.ReactElement {
  const imgs: React.ReactElement[] = [
    <GalleryFrame imagePath="IMAGE 1"></GalleryFrame>,
    <GalleryFrame imagePath="IMAGE 2"></GalleryFrame>,
    <GalleryFrame imagePath="IMAGE 3"></GalleryFrame>,
  ];
  return (
    <>
      <div className={styles.gallery}>{imgs[0]}</div>
    </>
  );
}

export default Gallery;
