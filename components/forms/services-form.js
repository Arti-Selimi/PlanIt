"use client";
import styles from "./services-form.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { onSubmit } from "../database-components/log-firebase";

export default function Form() {
  const [active, setActive] = useState(null);
  const { register, handleSubmit, setValue } = useForm();

  const chooseButton = (index, category) => {
    setActive(index);
    setValue("category", category);
  };

  return (
    <motion.div className={styles.right}>
      <motion.form
        className={styles.form}
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <h3>Enter the name of the company/person or the name of the event.</h3>
        <input
          type="text"
          placeholder="Event name"
          {...register("name")}
        ></input>
        <h3>Choose the category of the plan.</h3>
        <motion.div className={styles.category}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => chooseButton(1, "Wedding/Family Gathering")}
            style={{ backgroundColor: active === 1 ? "#00DAC6" : "" }}
          >
            <h1>Wedding/Family Gathering</h1>
            <p>Click to select</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => chooseButton(2, "Corporate Event")}
            style={{ backgroundColor: active === 2 ? "#00DAC6" : "" }}
          >
            <h1>Corporate Event</h1>
            <p>Click to select</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => chooseButton(3, "Other")}
            style={{ backgroundColor: active === 3 ? "#00DAC6" : "" }}
          >
            <h1>Other</h1>
            <p>Click to select</p>
          </motion.div>
        </motion.div>
        <h3>Pick a date that would fit your schedule.</h3>
        <motion.div className={styles.date}>
          <motion.div className={styles.dateInput}>
            <h3>On</h3>
            <input type="date" {...register("date")}></input>
          </motion.div>
          <motion.div className={styles.duration}>
            <div className={styles.from}>
              <h3>From</h3>
              <input type="time" {...register("startingTime")}></input>
            </div>
            <div className={styles.to}>
              <h3>To</h3>
              <input type="time" {...register("endingTime")}></input>
            </div>
          </motion.div>
        </motion.div>
        <button type="submit">
          <h1 className="title">Plan</h1>
        </button>
      </motion.form>
    </motion.div>
  );
}
