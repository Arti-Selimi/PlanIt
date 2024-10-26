import styles from "./page.module.scss";
import Form from "@/components/form/form";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default function Landing() {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h1 className="title">•PlanIt•</h1>
        <p>
          At PlanIt, we are dedicated to making your events unforgettable. From
          corporate gatherings to personal celebrations, we handle every detail
          to ensure a <code className="title" style={{fontSize: "1rem", border: "none", padding: "0"}}>seamless</code> experience.
        </p>
      </div>
      <div className={styles.formContainer}>
        <Form />
      </div>
    </main>
  );
}
