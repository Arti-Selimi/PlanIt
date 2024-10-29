import React from "react";
import Image from "next/image";
import styles from "./main-layout.module.scss"
import background from "@/public/images/background.svg";
import notes from "@/public/images/notes.svg";
import schedule from "@/public/images/schedule.svg";

export default function Images() {
  return (
      <Image
        className={styles.image}
        src={background}
        layout="fill"
        alt="background"
        objectFit="contain"
      />
  );
}
