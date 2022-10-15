import React from "react";
import "./Navbar.css"; //Css deki degisiklikleri algilamasi Icin

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="../../aboutus">ABOUT US</a>
          </li>
          <li>
            <a href="../../foryou">FOR YOU</a>
          </li>
          <li>
            <a href="../../services">SERVICES</a>
          </li>
          <li>
            <a href="../../blog">BLOG</a>
          </li>
          <li>
            <a href="../../vlog">VLOG</a>
          </li>
          <li>
            <a href="../../contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
