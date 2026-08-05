import React from "react";
import "./WhyShopWithUs.css";
import {assets} from "../../assets/assets"
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
    description:
      "Every outfit is crafted with premium fabrics for long-lasting comfort.",
  },
  {
    id: 2,
    icon: <FaTshirt />,
    title: "Latest Fashion",
    description:
      "Stay ahead with trendy styles inspired by modern fashion collections.",
  },
  {
    id: 3,
    icon: <FaTags />,
    title: "Affordable Prices",
    description:
      "Enjoy premium fashion at prices that fit every budget and lifestyle.",
  },
  {
    id: 4,
    icon: <FaLeaf />,
    title: "Comfort & Style",
    description:
      "Designed to deliver everyday comfort without compromising on style.",
  },
  {
    id: 5,
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    description: "Quick and reliable shipping to your doorstep across India.",
  }
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
          <p>
            Every product at NITRA is carefully selected to deliver quality,
            comfort and modern fashion for every member of your family.
          </p>
        </div>

        <div className="promise-wrapper">
          {/* Right */}
          <div className="promise-right">
            <img src={assets.promise_image} alt="NITRA Fashion" />
          </div>
          {/* Left */}

          <div className="promise-left">
            {promises.map((item) => (
              <div className="promise-item" key={item.id}>
                <div className="promise-icon">{item.icon}</div>

                <div className="promise-content">
                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
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
