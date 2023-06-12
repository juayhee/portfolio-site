import React from "react";
import styles from "./Root.module.scss";
import Header from "../../components/Header/Header.tsx";
import { Outlet } from "react-router-dom";

const headerProps = {
  Home: "/",
  About: "/about",
  Skills: "/skills",
  Works: "/works",
  Contact: "/contact",
};

function Root(): React.ReactElement {
  return (
    <>
      <div className={styles.headerContainer}>
        <Header {...headerProps} />
      </div>
      <Outlet />
    </>
  );
}

export default Root;
