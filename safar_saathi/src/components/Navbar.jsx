/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../images/hello.png";
import global_line from "../images/global-line.png";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <nav>
        <div className="leftpart">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="namelogo"></div>
        </div>
        <div className="rightpart">
          <button className="login">Login</button>
          <button className="login">SignUp</button>
          <button className="en">
            <img src={global_line} alt="" />
            <p>EN</p>
          </button>
        </div>
      </nav>
      ;
    </div>
  );
};

export default navbar;
