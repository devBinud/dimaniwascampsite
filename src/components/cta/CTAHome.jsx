import React from "react";
import styles from "./ctahome.module.css";

const CTAHome = () => {
  const phoneNumber = "+918011602251"; // your phone number

  return (
    <div className={styles.ctaSection}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          Escape to the Wild, Reconnect with Nature
        </h2>

        <p className={styles.subtitle}>
          Tents • Campfires • Adventures Await
        </p>

        {/* Call Button */}
        <a href={`tel:${phoneNumber}`}>
          <button className={styles.ctaButton}>
            Call Us at {phoneNumber}
          </button>
        </a>
      </div>
    </div>
  );
};

export default CTAHome;
