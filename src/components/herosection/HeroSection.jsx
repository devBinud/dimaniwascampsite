import { useState } from "react";
import styles from "./herosection.module.css";
import { Tent } from "lucide-react";
// import heroImg from "../../assets/backgrounds/hero_bg1.jpg";
import AppointmentModal from "../../components/appointmentModal/AppointmentModal.js"

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.heroSection_wrapper}>
        <div className={styles.heroSection_inner}>
          {/* Left Content */}
          <div className={styles.heroSection_left}>
            <h1 className={styles.heroSection_heading}>
              Welcome to{" "}
              <span className={styles.heroSection_gradientText}>
                Dima Niwas Campsite Cum Restaurant
              </span>
            </h1>

            <p className={styles.heroSection_paragraph}>
              Discover the beauty of nature with Dima Niwas Campsite — your
              perfect escape from city life. From lush green forests to peaceful
              lakeside tents, we bring you closer to the wilderness with comfort
              and safety.
            </p>

            <button
              className={styles.heroSection_button}
              onClick={() => setIsModalOpen(true)}
            >
              <Tent className={styles.arrowIcon} /> Book Your Camp Now
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
