"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import styles from "./form.module.scss";
import { onSubmit } from "../database-components/auth-firebase";
import { useRouter } from "next/navigation";

export default function Form() {
  const [formState, setFormState] = useState(false);
  const router = useRouter();

  const schema = yup.object().shape({
    Name: formState
      ? yup.string()
      : yup.string().required("First name is required"),
    Surname: formState
      ? yup.string()
      : yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required(),
    password: yup.string().min(8).max(20).required(),
    verifiedPassword: formState
      ? yup.string()
      : yup.string()
          .oneOf([yup.ref("password"), null], "Passwords must match")
          .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const variants = {
    show: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.2, ease: "easeIn" },
    },
    hide: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.form
      initial="hide"
      animate="show"
      className={styles.form}
      onSubmit={handleSubmit((data) => onSubmit(data, formState, router))}
    >
      <div className={styles.tab}>
        <h3
          id={!formState ? "active" : undefined}
          onClick={() => setFormState(false)}
        >
          Sign Up
        </h3>
        <h3
          id={formState ? "active" : undefined}
          onClick={() => setFormState(true)}
        >
          Log In
        </h3>
      </div>
      {!formState && (
        <motion.div
          variants={variants}
          initial="hide"
          animate={!formState ? "show" : "hide"}
          className={styles.name}
        >
          <input
            name="Name"
            className={styles.input}
            type="text"
            placeholder="First Name"
            {...register("Name")}
          />
          <p>{errors.Name?.message}</p>
          <input
            name="Surname"
            className={styles.input}
            type="text"
            placeholder="Last Name"
            {...register("Surname")}
          />
          <p>{errors.Surname?.message}</p>
        </motion.div>
      )}
      <div className={styles.email}>
        <input
          name="Email"
          className={styles.input}
          type="email"
          placeholder="email@example.com"
          {...register("email")}
        />
      </div>
      <div className={styles.submit}>
        <motion.div>
          <input
            name="Password"
            type="password"
            placeholder="Password"
            className={styles.input}
            {...register("password")}
          />
          {!formState && (
            <input
              name="Verification"
              type="password"
              placeholder="Verify Password"
              className={styles.input}
              {...register("verifiedPassword")}
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
}
