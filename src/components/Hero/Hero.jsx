import React from "react";
import "./Hero.css";
import {assets} from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
      const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${assets.hero_background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span>NEW COLLECTION 2026</span>

        <h1>
          Elevate Your
          <br />
          Everyday Style
        </h1>

        <p>
          Discover timeless fashion designed for modern living. Premium quality,
          effortless elegance, and styles you'll love.
        </p>
        <div className="hero-btns">
          <button className="primary-btn" onClick={()=>navigate("/shop")}>Shop Now</button>
          <button className="secondary-btn">Explore Collection</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
