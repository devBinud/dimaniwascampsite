import React from "react";
import styles from "./topservices.module.css";
import camp1 from "../../assets/images/5.jpeg";
import camp2 from "../../assets/images/lakesidecamping.jpg";
import camp3 from "../../assets/images/watersports.jpg";

const TopServices = () => {
  const packages = [
    {
      title: "Nature View Camping",
      price: "Relax in scenic tents by the lake",
      image: camp1,
    },
    {
      title: "Lakeside Restaurant",
      price: "Delicious food with a beautiful view",
      image: camp2,
    },
    {
      title: "Water Sports & Activities",
      price: "Fun-filled water games and outdoor activities",
      image: camp3,
    },
  ];

  return (
    <section className={styles.campsiteSection}>
      <div className={styles.campsiteHeader}>
        <h2 className={styles.campsiteTitle}>Our Main Attractions</h2>
        <p className={styles.campsiteSubtitle}>
          Camping, lakeside dining, and water activities you’ll love.
        </p>
      </div>

      <div className={styles.campsiteGrid}>
        {packages.map((pkg, index) => (
          <div key={index} className={styles.campsiteCard}>
            <div className={styles.campsiteImageWrapper}>
              <img
                src={pkg.image}
                alt={pkg.title}
                className={styles.campsiteImage}
              />
            </div>

            <div className={styles.campsiteContent}>
              <h3 className={styles.campsitePackageTitle}>{pkg.title}</h3>
              {/* <button className={styles.bookNowBtn}>Explore</button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopServices;
