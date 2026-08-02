import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar-container">
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
            <h2>ShopToday</h2>
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
      <div className="mobile-navbar">
        <h2 className="mobile-logo">ShopToday</h2>

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
