import React from "react";
import styles from "./campsitemapview.module.css";

const CampsiteMapView = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapHeader}>
        <h2 className={styles.mapTitle}>Our Campsite Location</h2>
        <p className={styles.mapDescription}>
          Find us at Didung Raji, Umrangso. Explore the natural beauty and plan your stay easily with the map below.
        </p>
      </div>

      <div className={styles.mapWrapper}>
        <iframe
          title="Campsite Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.8554725808244!2d92.7263118562555!3d25.511619819908887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374ff353a40d0597%3A0xc3248ff2a4272264!2sDidung%20Raji%20Umrangso!5e1!3m2!1sen!2sin!4v1766562136092!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default CampsiteMapView;
