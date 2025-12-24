import React from "react";
import styles from "./campsiteShowcase.module.css";
import singleTent from "../../assets/images/1.jpeg";
import doubleTent from "../../assets/images/7.jpeg";
import familyTent from "../../assets/images/family.jpeg";

const CampsiteShowcase = () => {
  const whatsappNumber = "919435851141"; // WhatsApp number

  const packages = [
    {
      title: "Single Tent",
      description: "Cozy tent perfect for solo campers.",
      price: "₹999 / day",
      image: singleTent,
    },
    {
      title: "Double Tent",
      description: "Comfortable tent for 2 people, ideal for couples.",
      price: "₹1,899 / day",
      image: doubleTent,
    },
    {
      title: "Family Tent",
      description: "Spacious tent for the whole family, includes extra amenities.",
      price: "₹2,699 / day",
      image: familyTent,
    },
  ];

  const handleBookNow = (pkg) => {
    const message = `
🏕️ *Campsite Booking Request*

📦 Tent Type: ${pkg.title}
💰 Price: ${pkg.price}

Please let me know the availability and further details.
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className={styles.campsiteSection}>
      <div className={styles.campsiteHeader}>
        <h2 className={styles.campsiteTitle}>Our Tent Options</h2>
        <p className={styles.campsiteSubtitle}>
          Choose your tent and book a memorable 1-day camping experience.
        </p>
      </div>

      <div className={styles.campsiteGrid}>
        {packages.map((pkg, index) => (
          <div key={index} className={styles.campsiteCard}>
            <div className={styles.campsiteImageWrapper}>
              <img src={pkg.image} alt={pkg.title} className={styles.campsiteImage} />
              <div className={styles.campsitePrice}>{pkg.price}</div>
            </div>
            <div className={styles.campsiteContent}>
              <h3 className={styles.campsitePackageTitle}>{pkg.title}</h3>
              <p className={styles.campsiteDescription}>{pkg.description}</p>
              <button
                className={styles.bookNowBtn}
                onClick={() => handleBookNow(pkg)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampsiteShowcase;
