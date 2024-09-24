import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Dario Colaciuri</h1>
      <ul className="nav-links">
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#about">stack</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
