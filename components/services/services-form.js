"use client";
import styles from "./services-form.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ArrowDown from "../arrowDown/arrowDown";

export default function Form() {
  const [active, setActive] = useState(null);

  const chooseButton = (index) => {
    setActive(index);
  };

  return (
    <motion.div className={styles.right}>
      <motion.form className={styles.form}>
        <h3>Enter the name of the company/person or the name of the event.</h3>
        <input type="text" placeholder="Event name"></input>
        <h3>Choose the category of the plan.</h3>
        <motion.div className={styles.category}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => chooseButton(1)}
            style={{ backgroundColor: active === 1 ? "#ffd700" : "" }}
          >
            <h1>Wedding/Family Gathering</h1>
            <p>Click to select</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => chooseButton(2)}
            style={{ backgroundColor: active === 2 ? "#ffd700" : "" }}
          >
            <h1>Corporate Event</h1>
            <p>Click to select</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => chooseButton(3)}
            style={{ backgroundColor: active === 3 ? "#ffd700" : "" }}
          >
            <h1>Other</h1>
            <p>Click to select</p>
          </motion.div>
        </motion.div>
        <h3>Pick a date that would fit your schedule.</h3>
        <motion.div className={styles.date}>
          <motion.div className={styles.dateInput}>
            <h3>On</h3>
            <input type="date"></input>
          </motion.div>
          <motion.div className={styles.duration}>
            <h3>From</h3>
            <input type="time"></input>
            <h3>To</h3>
            <input type="time"></input>
          </motion.div>
        </motion.div>
        <button type="submit">
          <h1>Plan</h1>
        </button>
      </motion.form>
    </motion.div>
  );
}
