import Image from "next/image";
import Companies from "./companies";
import styles from "./about-additional.module.scss";
import join from "@/public/images/join.svg";
import Link from "next/link";

import "swiper/css";
import "swiper/css/autoplay";

export default function AboutAdditional() {
  return (
    <>
      <Companies />
      <div className={styles.container}>
        <Link href="/services">
          <button className={styles.button}>Try our services</button>
        </Link>
        <Image
          width="300"
          height="300"
          viewBox="0 0 0 0"
          src={join}
          className={styles.img}
          alt="image"
        />
      </div>
    </>
  );
}
