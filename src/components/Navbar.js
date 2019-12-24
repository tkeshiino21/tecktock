import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="teck-stock" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaBars className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
