"use client";

import styles from "./main-layout.module.scss";
import { motion } from "framer-motion";
import { auth } from "@/firebase";
import React from "react";
import Image from "next/image";
import background from "@/public/images/background.svg"

export default function MainLayout() {
  const user = auth.currentUser;

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const variants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        className={styles.container}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className={styles.main}>
          <h3>
            Hey there {user ? capitalize(user.displayName.split(" ")[0].toLowerCase()) : "User"}
            , Plan better.
          </h3>
          <h1>Your Partner in Perfect Planning</h1>
          <p>
            <span className="offset">Welcome to PlanIt</span>, where we turn
            your dreams into reality with seamless and extraordinary event
            planning. Our expert team is dedicated to crafting unforgettable
            experiences, ensuring every detail is perfect from start to finish.
            Whether you&apos;re planning a corporate gala, a wedding, or a
            private party, we bring creativity, precision, and passion to every
            event we organize.
          </p>
          <p>
            <span className="offset">
              At
              <code
                className="title"
                style={{ fontSize: "1rem", border: "none" }}
              >
                PlanIt
              </code>
            </span>
            , we believe that every moment should be magical, and we&apos;re
            here to make that happen. Join us on a journey to create events that
            are not just memorable but truly extraordinary. Let us handle the
            complexities while you enjoy the celebration of a lifetime.
          </p>
        </div>
        <div className={styles.scetchboard}>
          <Image
            className={styles.image}
            src={background}
            layout="fill"
            alt="background"
            objectFit="contain"
          />
        </div>
      </motion.div>
    </>
  );
}
