import React from "react";
import styles from "./about.module.css";
import aboutImg from "../../assets/images/4.jpeg"

const AboutCampsite = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* Left Text Section */}
        <div className={styles.textSection}>
          <p className={styles.welcomeText}>Welcome to</p>
          <p className={styles.subtitletwo}>Dima Niwas Campsite Cum Restaurant</p>
          <p className={styles.description}>
            <span className={styles.highlight}>
              Escape the city and immerse yourself in the beauty of nature.
              At Dima Niwas Campsite, we provide a serene and safe environment for adventurers, families, and nature lovers.
            </span>
          </p>
          <p className={styles.description}>
            Experience cozy tents, lakeside relaxation, guided nature trails, and evening bonfires under the stars.
            Whether you're seeking adventure, tranquility, or quality time with loved ones, Dima Niwas Campsite is your perfect getaway.
            We focus on comfort, safety, and a truly immersive outdoor experience.
          </p>
        </div>

        {/* Right Image Section */}
        <div className={styles.imageSection}>
          <img src={aboutImg}
           alt="Beautiful Campsite" className={styles.image} />
        </div>

      </div>
    </section>
  );
};

export default AboutCampsite;
