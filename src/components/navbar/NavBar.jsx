import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/LOGO.png"

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
        <div className="Logo-Section">
            <img className="logo" src={logo} alt="" />
        </div>

      <ul className={`navlist ${menuOpen ? "open" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Links</a></li>
        <li><a href="#">Contact-Us</a></li>
      </ul>

      <div
        className={`fas ${menuOpen ? "fa-xmark" : "fa-bars"}`}
        id="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      ></div>
    </header>
  );
};
