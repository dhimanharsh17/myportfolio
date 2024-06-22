import React from "react";

import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harsh</h1>
        <p className={styles.description}>
          I'm a Web Developer with 1 year of experience using HTML, CSS, React
          MongoDB. Reach out if you'd like to learn more! 
        </p>
        <div>
        <a href="mailto:harshdhiman1017@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="\assets\hero\Resume 11.pdf" className={styles.contactBtn1}>
          Download Cv
        </a>
        </div>
        
      </div>
      <img
        src="/assets/about/developerImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
