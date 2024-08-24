import Image from "next/image";
import React from 'react';
import Companies from "./[gridSlug]/companies";
import styles from "./about-grid.module.scss"
import join from "@/public/images/join.svg"
import Link from "next/link";

import "swiper/css";
import "swiper/css/autoplay";

export default function AboutGrid() {
  return (
    <>
      <Companies />
      <div className={styles.container}>
        <h3 className={styles.title}>Want to become a client?</h3>
        <p className={styles.dummy} id="title">You inc.</p>
        <Image src={join} className={styles.img}/>
        <Link href="/services"><button className={styles.button}>Try our services</button></Link>
      </div>
    </>
  );
}
