import React, { useState } from "react";
import logo from "../images/hello.png";
import global_line from "../images/global-line.png";

const navbar = () => {
  return (
    <div>
      <nav>
        <div class="leftpart">
          <div class="logo">
            <img src={logo} alt="" />
          </div>
          <div class="namelogo">Safar-Saathi</div>
        </div>
        <div class="rightpart">
          <button class="login">Login</button>
          <button class="login">SignUp</button>
          <button class="en">
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
