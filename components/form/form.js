"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./form.module.scss";
import { motion } from "framer-motion";
import * as yup from "yup";
import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formState, setFormState] = useState(false);
  const router = useRouter();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please use a valid e-mail")
      .required("E-mail is required"),
    password: yup
      .string()
      .min(8, "Password must contain 8-20 characters")
      .max(20, "Password must contain 8-20 characters")
      .required("Password is required"),
    verifiedPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Must match password")
      .required("Password verification is required"),
  });

  console.log(formState);

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      if (!formState) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User signed up:", userCredential.user);
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User logged in:", userCredential.user);
      }
      router.push("/home");
    } catch (error) {
      console.error("Error:", error.code, error.message);
    }
  };

  console.log(errors);

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
      onSubmit={handleSubmit(onSubmit)}
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
      {!formState ? (
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
            {...register("Name", { required: "First name is required" })}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Last Name"
            {...register("Surname", { required: "Last name is required" })}
          />
        </motion.div>
      ) : (
        ""
      )}
      <div className={styles.email}>
        <input
          className={styles.input}
          type="email"
          placeholder="email@example.com"
          {...register("email", { required: "Email is required" })}
        />
      </div>
      <div className={styles.submit}>
        <motion.div>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            {...register("password", { required: "password is required" })}
          />
          {!formState && (
            <input
              type="password"
              placeholder="Verify Password"
              className={styles.input}
              {...register("verifiedPassword", {
                required: "Please verify your password",
              })}
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
