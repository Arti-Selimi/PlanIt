"use client";
import Image from "next/image";
import question from "@/public/images/question.svg";
import styles from "./about-layout.module.scss";
import { motion } from "framer-motion";

export default function AboutLayout() {
  const aboutVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={styles.main}
      variants={aboutVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div>
        <Image
          className={styles.image}
          src={question}
          alt="question"
          width={300}
          height={300}
        />
      </motion.div>
      <div className={styles.questions}>
        <div className={styles.top}>
          <section>
            <h1>What is PlanIt?</h1>
            <p>
              PlanIt is your ultimate solution for seamless event management.
              Our platform is designed to help you organize, manage, and execute
              events of any scale with ease and efficiency. Whether it's a
              corporate event, a social gathering, or a large conference, PlanIt
              provides all the tools you need to ensure your event is a success.
            </p>
          </section>
        </div>
        <div className={styles.mid}>
          <section>
          <h1>Why Choose Us?</h1>
          <p>
            Choosing PlanIt means opting for a hassle-free event planning
            experience. We offer a user-friendly interface, comprehensive
            features, and exceptional customer support to ensure your needs are
            met at every stage of your event planning process. Our robust
            platform is trusted by professionals around the world, and we
            continuously strive to innovate and improve our services.
          </p>
          </section>
        </div>
        <div className={styles.bot}>
          <section>
          <h1>How Can We Help You?</h1>
          <p>
            At PlanIt, we provide personalized solutions tailored to your
            specific event requirements. Our team of experts is dedicated to
            offering guidance and support to make your event memorable. From
            venue selection and guest management to scheduling and budgeting, we
            cover all aspects of event planning, ensuring a smooth and
            successful experience for you and your attendees.
          </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
