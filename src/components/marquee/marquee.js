import React from "react";
import { Link } from "react-router-dom";
import "./marquee.css";

function Marquee() {
  return (
    <div className="container">
      <hr className="hr-margin" />
      <Link to="/project1">
        <marquee> PANIC PAL</marquee>
      </Link>
      <hr className="hr-margin" />
      <Link to="/project2">
        <marquee>SHELF LIFE</marquee>
      </Link>
      <hr className="hr-margin" />
    </div>
  );
}

export default Marquee;
