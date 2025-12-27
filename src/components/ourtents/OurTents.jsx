import React from "react";
import styles from "./ourtents.module.css";

// Import your tent images
import tent1 from "../../assets/images/1.jpeg";
import tent2 from "../../assets/images/2.jpeg";
import tent3 from "../../assets/images/3.jpeg";
import tent4 from "../../assets/images/4.jpeg";
import tent5 from "../../assets/images/5.jpeg";
import tent6 from "../../assets/images/6.jpeg";
import tent7 from "../../assets/images/7.jpeg";
import tent8 from "../../assets/images/8.jpeg";

const tents = [
  { image: tent1, description: "A comfy tent surrounded by lush forest." },
  { image: tent2, description: "Enjoy the serene river view from your tent." },
  { image: tent3, description: "Glamping style tent with premium amenities." },
  { image: tent4, description: "Spacious tent perfect for family stays." },
  { image: tent5, description: "Ideal for adventure seekers and nature lovers." },
  { image: tent6, description: "Wake up to breathtaking mountain views." },
  { image: tent7, description: "Tent with a calming lake view." },
  { image: tent8, description: "Perfect spot to enjoy stunning sunsets." },
];

const OurTents = () => {
  return (
    <section className={styles.tentsSection}>
      <div className={styles.tentsHeader}>
        <h2 className={styles.tentsTitle}>Our Tents</h2>
        <p className={styles.tentsSubtitle}>
          Explore our cozy and comfortable tents for a perfect camping experience.
        </p>
      </div>

      <div className={styles.tentsGrid}>
        {tents.map((tent, index) => (
          <div key={index} className={styles.tentCard}>
            <div className={styles.tentImageWrapper}>
              <img src={tent.image} alt="Tent" className={styles.tentImage} />
            </div>
            <div className={styles.tentContent}>
              <p className={styles.tentDescription}>{tent.description}</p>

              {/* Call Button */}
              <a href="tel:8011602251" className={styles.callBtn}>
                Call for Booking
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTents;
