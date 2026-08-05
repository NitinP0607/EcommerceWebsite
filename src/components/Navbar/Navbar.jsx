import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


 useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className="left-navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="middle">
          <div className="logo">
            <img src={assets.logo} onClick={()=>navigate("/")} alt="" />
          </div>
        </div>
        <div className="right-navbar">
          <ul>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={`mobile-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="mobile-logo">
          <img src={assets.logo} onClick={()=>navigate("/")} alt="" />
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

        <div className={`mobile-menu ${open ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)}>
            Shop
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/help" onClick={() => setOpen(false)}>
            Help
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
