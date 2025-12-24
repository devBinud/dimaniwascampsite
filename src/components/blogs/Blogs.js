import React from "react";
import styles from "./campsiteShowcase.module.css";
import camp1 from "../../assets/images/3.jpeg";
import camp2 from "../../assets/images/8.jpeg";
import camp3 from "../../assets/images/6.jpeg";

const CampsiteShowcase = () => {
  const whatsappNumber = "919435851141"; // WhatsApp number

  const packages = [
    {
      title: "2 Days 1 Night Adventure Camp",
      description:
        "Enjoy a cozy tent stay with bonfire, BBQ dinner, and morning nature walk. Perfect for weekend explorers.",
      price: "₹2,999 / person",
      image: camp1,
      amenities: ["Tent Stay", "Bonfire", "BBQ Dinner", "Morning Trek"],
    },
    {
      title: "3 Days 2 Nights Nature Escape",
      description:
        "Reconnect with nature — forest trail, riverside camping, kayaking, and stargazing with delicious meals.",
      price: "₹2,499 / person",
      image: camp2,
      amenities: ["Kayaking", "Meals Included", "Hiking", "Campfire Nights"],
    },
    {
      title: "Luxury Riverside Tent Stay",
      description:
        "Glamping-style luxury tents with private deck, buffet meals, soft beds, and peaceful riverside mornings.",
      price: "₹1,999 / person",
      image: camp3,
      amenities: ["Luxury Tent", "Private Deck", "Buffet Meals", "Riverside View"],
    },
  ];

  const handleBookNow = (pkg) => {
    const message = `
🏕️ *Campsite Booking Request*

📦 Package: ${pkg.title}
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
        <h2 className={styles.campsiteTitle}>Discover Our Camping Packages</h2>
        <p className={styles.campsiteSubtitle}>
          Choose your perfect stay and create unforgettable memories under the stars.
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
              <ul className={styles.amenitiesList}>
                {pkg.amenities.map((a, i) => (
                  <li key={i} className={styles.amenityItem}>• {a}</li>
                ))}
              </ul>
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
