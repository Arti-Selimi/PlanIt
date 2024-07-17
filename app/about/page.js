import React from "react";
import styles from "./page.module.scss"
import AboutLayout from "@/components/about-layout/about-layout";
import Navbar from "@/components/navbar/navbar";
import AboutGrid from "@/components/about-layout/about-grid";

export default function About() {
  return (
    <div id="main">
      <div className={styles.container} id="container">
        <Navbar />
        <AboutLayout />
        <h1 className="title" style={{fontSize: "3rem"}}>Our Clients</h1>
        <AboutGrid />
      </div>
    </div>
  );
}
