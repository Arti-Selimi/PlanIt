import React from "react";
import Image from "next/image";
import styles from "./services-layout.module.scss";
import thinking from "@/public/images/thinking.svg";
import card from "@/public/images/card.svg";
import Form from "./services-form";

export default function Layout() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Image src={card} alt="card" width={500} />
        <Image src={thinking} alt="thinking" width={500} />
      </div>
        <Form />
    </div>
  );
}
