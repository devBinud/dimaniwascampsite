import React, { useEffect, useState } from 'react';
import styles from './contact.module.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  });

  const whatsappNumber = '919365484564'; // your main WhatsApp contact (without '+')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    const messageText = `🏕️ *Dima Niwas Campsite Cum Resturant Enquiry*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2>Get in Touch with Us</h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', fontSize: 17.2 }}>
            Ready for an unforgettable experience by the lake? Enjoy stunning views, exciting water balloon activities, comfortable tents, and delicious food all in one place. Whether you’re coming with friends, family, or colleagues, our campsite and restaurant offer the perfect mix of adventure, relaxation, and great dining.
          </p>

          <div className={styles.contactRow}>
            <FaPhoneAlt className={styles.icon} />
            <a href="tel:+919365484564" className={styles.contactLink}>+91 9365484564 38129</a>
          </div>
          <div className={styles.contactRow}>
            <FaPhoneAlt className={styles.icon} />
            <a href="tel:+918011602251" className={styles.contactLink}>+91 8011602251</a>
          </div>
          <div className={styles.contactRow}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:info@dimaniwascampsite.in" className={styles.contactLink}>info@dimaniwascampsite.in</a>
          </div>
          <div className={styles.contactRow}>
            <FaMapMarkerAlt className={styles.icon} />
            <span className={styles.contactLink}>
              Didung Razi, Umrangso, Dima Hasao(Assam), India
            </span>
          </div>

          <div className="mt-4"></div>
          <h2>Whatsapp Booking</h2>
          <p style={{ fontFamily: 'Figtree, sans-serif', marginTop: '10px' }}>
            Chat directly with our campsite experts for quick queries or to
            customize your stay plan.
            <br />
            <strong style={{ color: '#002d39' }}>+91 9365484564 / +91 9435851141</strong>
            <br />
            <span style={{ fontStyle: 'italic' }}>
              (Mon–Sat: 9 AM – 7 PM / Sunday: 10 AM – 3 PM)
            </span>
          </p>

          <div className={styles.mapWrapper} style={{ position: 'relative' }}>
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.8554725808244!2d92.7263118562555!3d25.511619819908887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374ff353a40d0597%3A0xc3248ff2a4272264!2sDidung%20Raji%20Umrangso!5e1!3m2!1sen!2sin!4v1766562136092!5m2!1sen!2sin"
 

              allowFullScreen=""
              loading="lazy"
              title="Campsite Location"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: '100%', height: '400px', border: 0 }}
            ></iframe>
            <div
              style={{
                position: 'absolute',
                right: '0px',
                top: '10px',
                background: '#ffffffdd',
                color: '#734b44ff',
                fontFamily: 'Playfair Display, serif',
                padding: '8px 14px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            >
              Dima Niwas Campsite Cum Resturant Location
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <h2>Send us a Camping Query</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us your travel dates, group size, or any special requests..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <label>I agree to the booking policies and terms</label>
            </div>
            <button className={styles.sendMessage_button} type="submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
