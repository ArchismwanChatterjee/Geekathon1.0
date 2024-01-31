/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../images/hello.png";
import global_line from "../images/global-line.png";
import { useNavigate } from "react-router-dom";
const Navbar = ({ login, logout, user, loggedIn }) => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className="leftpart">
          <div className="logo">
            <img
              src={logo}
              alt=""
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="namelogo"></div>
        </div>
        <div className="rightpart">
          {loggedIn ? (
            <>
              <h1>Hello, {user}!</h1>
              <button className="login" onClick={logout}>
                Logout
              </button>
              <button
                className="login"
                onClick={() => {
                  navigate("/previous-itenary");
                }}>
                Previous Itinerary
              </button>
            </>
          ) : (
            <button className="login" onClick={login}>
              Login
            </button>
          )}

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

export default Navbar;
