import React from "react";
import "./WhyShopWithUs.css"

import {
  FaShippingFast,
  FaUndoAlt,
  FaHeadset,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaShippingFast />,
    title: "Free Shipping",
    description:
      "Enjoy fast and free shipping on all eligible orders above ₹999, ensuring your favorite fashion reaches your doorstep quickly.",
  },
  {
    id: 2,
    icon: <FaUndoAlt />,
    title: "Easy Returns",
    description:
      "Shop with confidence using our simple 7-day return and exchange policy, designed to make every purchase completely hassle-free.",
  },
  {
    id: 3,
    icon: <FaLock />,
    title: "Secure Payments",
    description:
      "Your payments are protected with advanced encryption and trusted payment gateways, ensuring every transaction remains safe and secure.",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Our dedicated customer support team is available around the clock to answer questions and provide quick assistance whenever needed.",
  },
];

const WhyShopWithUs = () => {
  return (
    <section className="why-shop">
      <div className="why-shop-title">
        <h2>Why Shop With Us</h2>
        <p>
          Experience quality fashion, trusted service, and a seamless shopping
          experience every time.
        </p>
      </div>

      <div className="why-shop-container">
        {features.map((feature) => (
          <div className="why-card" key={feature.id}>
            <div className="why-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyShopWithUs;