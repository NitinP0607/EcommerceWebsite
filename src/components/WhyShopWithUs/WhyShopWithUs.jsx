import React from "react";
import "./WhyShopWithUs.css";
import CountUpModule from "react-countup";

const CountUp = CountUpModule.default ?? CountUpModule;

import {
  FaShippingFast,
  FaUndoAlt,
  FaHeadset,
  FaLock,
  FaAward,
  FaTshirt,
  FaTags,
  FaLeaf,
  FaCheckCircle,
  FaStar,
  FaGift,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaShippingFast />,
    title: "Free Shipping",
    description:
      "Free delivery on eligible orders with quick and reliable shipping across India.",
  },
  {
    id: 2,
    icon: <FaUndoAlt />,
    title: "Easy Returns",
    description:
      "Simple 7-day return and exchange policy for a worry-free shopping experience.",
  },
  {
    id: 3,
    icon: <FaLock />,
    title: "Secure Payments",
    description:
      "100% secure payments with trusted payment gateways and encrypted checkout.",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Friendly customer support ready to help you anytime you need assistance.",
  },
];
const promises = [
  {
    id: 1,
    icon: <FaAward />,
    title: "Premium Quality",
  },
  {
    id: 2,
    icon: <FaTshirt />,
    title: "Latest Fashion",
  },
  {
    id: 3,
    icon: <FaTags />,
    title: "Affordable Prices",
  },
  {
    id: 4,
    icon: <FaLeaf />,
    title: "Comfort & Style",
  },
  {
    id: 5,
    icon: <FaShippingFast />,
    title: "Fast Delivery",
  },
  {
    id: 6,
    icon: <FaUndoAlt />,
    title: "Easy Returns",
  },
  {
    id: 7,
    icon: <FaLock />,
    title: "Secure Payments",
  },
  {
    id: 8,
    icon: <FaHeadset />,
    title: "24/7 Support",
  },
  {
    id: 9,
    icon: <FaStar />,
    title: "Trusted by Thousands",
  },
  {
    id: 10,
    icon: <FaCheckCircle />,
    title: "Quality Assured",
  },
];

const stats = [
  {
    id: 1,
    number: 150,
    suffix: "K+",
    title: "Happy Customers",
  },
  {
    id: 2,
    number: 50,
    suffix: "K+",
    title: "Orders Delivered",
  },
  {
    id: 3,
    number: 1200,
    suffix: "+",
    title: "Premium Products",
  },
  {
    id: 4,
    number: 4.9,
    suffix: "★",
    title: "Average Rating",
    decimal: 1,
  },
];

const WhyShopWithUs = () => {
  return (
    <section className="why-shop">
      {/* Heading */}

      <div className="why-shop-title">
        <span>WHY CHOOSE NITRA</span>

        <h2>Experience Fashion Beyond Shopping</h2>

        <p>
          At NITRA, we bring together premium quality, modern fashion, and
          exceptional customer service to make every shopping experience
          memorable.
        </p>
      </div>

      {/* Features */}

      <div className="why-shop-container">
        {features.map((feature) => (
          <div className="why-card" key={feature.id}>
            <div className="why-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Promise */}

      <div className="our-promise">

        <div className="section-heading">
          <span>OUR PROMISE</span>
          <h2>Committed To Quality</h2>
        </div>

        <div className="promise-grid">
          {promises.map((item) => (
            <div className="promise-card" key={item.id}>
              <div className="promise-icon">{item.icon}</div>

              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}

      <div className="stats-section">
        {stats.map((item) => (
          <div className="stat-box" key={item.id}>
            <h2>
              <CountUp
                end={item.number}
                duration={2.5}
                decimals={item.decimal || 0}
              />
              {item.suffix}
            </h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Trust Bar */}

      <div className="trust-bar">

        <div className="trust-item">
    <FaCheckCircle />
    <span>100% Secure Checkout</span>
  </div>

  <div className="trust-item">
    <FaShippingFast />
    <span>Fast Delivery Across India</span>
  </div>

  <div className="trust-item">
    <FaUndoAlt />
    <span>7-Day Easy Returns</span>
  </div>

  <div className="trust-item">
    <FaStar />
    <span>Trusted by 150K+ Customers</span>
  </div>

  <div className="trust-item">
    <FaAward />
    <span>Premium Quality Products</span>
  </div>

  <div className="trust-item">
    <FaLock />
    <span>Safe & Secure Payments</span>
  </div>

  <div className="trust-item">
    <FaHeadset />
    <span>24/7 Customer Support</span>
  </div>

  <div className="trust-item">
    <FaTags />
    <span>Best Price Guarantee</span>
  </div>

  <div className="trust-item">
    <FaGift />
    <span>Exclusive Member Offers</span>
  </div>

      </div>

      {/* CTA */}

      <div className="why-banner">

        <span>READY TO ELEVATE YOUR STYLE?</span>

        <h2>Fashion Designed For Every Generation</h2>

        <p>
          Explore premium collections for Men, Women, and Kids with styles that
          combine comfort, elegance, and affordability.
        </p>

        <button>Explore Collection</button>

      </div>
    </section>
  );
};

export default WhyShopWithUs;