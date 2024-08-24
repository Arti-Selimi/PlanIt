"use client";
import styles from "./services-form.module.scss";

export default function Form() {
  return (
    <div className={styles.right}>
      <form className={styles.form}>
        <h3>Enter the name of the copmany/person or the name of the event.</h3>
        <input type="text"></input>
        <h3>Choose the category of the plan.</h3>
        <div className={styles.category}></div>
        <h3>Pick a date that would fit your schedule.</h3>
        <input type="date"></input>
        <h3>How long will the plan take?</h3>
        <div className={styles.duration}>
          <h3>From</h3>
          <input type="time"></input>
          <h3>To</h3>
          <input type="time"></input>
        </div>
        <button type="submit">
          <h1>Plan</h1>
        </button>
      </form>
    </div>
  );
}
