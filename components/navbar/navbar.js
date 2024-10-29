"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import ArrowDown from "../arrowDown/arrowDown";

export default function Navbar() {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        className={styles.navbar}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <h1 className="title" style={{ margin: 0 }}>
          PlanIt
        </h1>
        <ul>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/home">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/about">About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/services">Services</Link>
          </motion.li>
        </ul>
        <motion.button
          className={styles.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get in touch
        </motion.button>
      </motion.div>
    </>
  );
}
