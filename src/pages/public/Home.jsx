import React, { useEffect } from 'react';
// import Banner from '../../components/banner/Banners.jsx';
import HeroSection from '../../components/herosection/HeroSection.jsx';
import About from '../../components/aboutus/About.jsx';
// import Categories from '../../components/categories/Categories.jsx';
import CTAHome from '../../components/cta/CTAHome.jsx';
import ContactUs from '../../components/contactus/Contact.jsx';
import FAQs from "../../components/whatsNew/FAQs.js"
import Blogs from "../../components/blogs/Blogs.js"
import TopServices from "../../components/topservices/TopServices.jsx"

const PublicHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      {/* <Categories /> */}
      <About />
      <TopServices />
      <CTAHome />
      <Blogs />
      <FAQs />
      <ContactUs />

      {/* Floating WhatsApp Button with Tent Emoji */}
      <a
        href="https://wa.me/918011602251?text=🏕️%20I%20am%20visiting%20the%20Dimaniwas%20Campsite%20via%20your%20website%20and%20interested%20to%20book%20a%20tent,%20could%20you%20connect%20with%20me%3F"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="whatsapp-emoji">🏕️</span>
      </a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 1000;
          font-size: 28px;
          transition: transform 0.2s ease, background 0.3s ease;
          cursor: pointer;
        }
        .whatsapp-float:hover {
          background-color: #2fb866ff;
        }
        .whatsapp-emoji {
          display: inline-block;
          line-height: 1;
        }
      `}</style>

    </div>
  );
};

export default PublicHome;
