import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-column">
          <h2>Shop Today</h2>

          <p>
            Discover premium fashion designed for every occasion. We bring
            quality, comfort, and modern style together for men, women,
            and kids.
          </p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Shop */}

        <div className="footer-column">
          <h3>Shop</h3>

          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
          </ul>
        </div>

        {/* Quick Links */}

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-column">
          <h3>Contact</h3>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Noida, Uttar Pradesh, India</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 9026532143</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>support@shoptoday.com</span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Shop Today. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;