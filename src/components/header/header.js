import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/final-project/">Fatima</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/about">+</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
