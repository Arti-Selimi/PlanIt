import React from "react";
import Image from "next/image";
import styles from "./main-layout.module.scss"
import background from "@/public/images/background.svg";
import notes from "@/public/images/notes.svg";
import schedule from "@/public/images/schedule.svg";

export default function Images() {
  return (
    <>
      {/* <Image
        className={styles.image}
        src={schedule}
        width={250}
        height={250}
        alt="schedule"
        objectFit="contain"
        style={{
          position: "absolute",
          zIndex: "2",
          top: "60%",
          left: "10%",
        }}
      /> */}
      <Image
        className={styles.image}
        src={background}
        layout="fill"
        alt="background"
        objectFit="contain"
      />
      {/* <Image
        className={styles.image}
        src={notes}
        width={150}
        height={150}
        alt="Notes"
        objectFit="contain"
        style={{ position: "absolute", zIndex: "2", top: "0%", left: "60%" }}
      /> */}
    </>
  );
}