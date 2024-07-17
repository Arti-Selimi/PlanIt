"use client";

import { useState } from "react";
import styles from "./form.module.scss";
import { motion } from "framer-motion";

const Form = () => {
  const [formState, setFormState] = useState(false);

  const variants = {
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
    hide: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.form initial="hide" animate="show" className={styles.form}>
      <div className={styles.tab}>
        <h3 id={!formState && "active"} onClick={() => setFormState(false)}>Sign Up</h3>
        <h3 id={formState && "active"} onClick={() => setFormState(true)}>Log In</h3>
      </div>
      <motion.div
        variants={variants}
        initial="hide"
        animate={!formState ? "show" : "hide"}
        className={styles.name}
      >
        <input
          className={styles.input}
          type="text"
          placeholder="First Name"
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Last Name"
          required
        />
      </motion.div>
      <div className={styles.email}>
        <input
          className={styles.input}
          type="email"
          placeholder="email@example.com"
          required
        />
      </div>
      <div className={styles.submit}>
        <motion.div>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          {!formState && (
            <input
              type="password"
              placeholder="Verify Password"
              className={styles.input}
            />
          )}
        </motion.div>
        <div>
          {!formState ? (
            <input
              type="submit"
              value="Sign up"
              className={styles.submitInput}
            />
          ) : (
            <input
              type="submit"
              value="Log in"
              className={styles.submitInput}
            />
          )}
        </div>
      </div>
    </motion.form>
  );
};

export default Form;
