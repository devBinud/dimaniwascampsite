import React, { useState } from "react";
import styles from "./appointmentModal.module.css";

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    tentType: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919365484564"; // 91 = India

    const whatsappMessage = `
🏕️ *New Campsite Booking Request*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}

📅 Check-in: ${formData.checkIn}
📅 Check-out: ${formData.checkOut}
👥 Guests: ${formData.guests}
⛺ Tent Type: ${formData.tentType}

📝 Special Request:
${formData.message || "None"}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles["appointmentModal-overlay"]}>
      <div className={styles["appointmentModal-modal"]}>
        <button
          className={styles["appointmentModal-closeButton"]}
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className={styles["appointmentModal-title"]}>
          Book a Campsite
        </h2>

        <form
          className={styles["appointmentModal-form"]}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className={styles["appointmentModal-input"]}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className={styles["appointmentModal-input"]}
          />

          <label>Check-in Date</label>
          <input
            type="date"
            name="checkIn"
            onChange={handleChange}
            required
            className={styles["appointmentModal-input"]}
          />

          <label>Check-out Date</label>
          <input
            type="date"
            name="checkOut"
            onChange={handleChange}
            required
            className={styles["appointmentModal-input"]}
          />

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            min="1"
            onChange={handleChange}
            required
            className={styles["appointmentModal-input"]}
          />

          <select
            name="tentType"
            onChange={handleChange}
            required
            className={styles["appointmentModal-input"]}
          >
            <option value="">Select Tent Type</option>
            <option value="Single Tent">Single Tent</option>
            <option value="Family Tent">Family Tent</option>
            <option value="Luxury Camp">Luxury Camp</option>
            <option value="RV Spot">RV Spot</option>
          </select>

          {/* <textarea
            name="message"
            placeholder="Special Requests (optional)"
            onChange={handleChange}
            className={styles["appointmentModal-textarea"]}
          /> */}

          <button type="submit" className={styles["appointmentModal-submit"]}>
            Book via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
