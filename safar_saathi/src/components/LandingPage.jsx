import React, { useState } from "react";
import "./landingPage.css";

// import "./script.js"; // Assuming this is the file where you have your JavaScript logic

const LandingPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [days, setDays] = useState("");

  const place = () => {
    // Your place function logic goes here
    // Note: You can access searchInput and days directly from the state
    // Example: localStorage.setItem("loc", searchInput);
    // Example: localStorage.setItem("days", days);
    // Example: window.location.href = "place.html";
  };

  return (
    <div className="main">
      <div className="page1">
        <div className="contentbox">
          <h2>Plan your next adventure</h2>
          <div className="oneone">
            <label htmlFor="search">Where do you want to go?</label>
            <input
              type="text"
              id="searchInput"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <style>
              {`.narrow-dropdown {
                max-width: 500px; /* Adjust the width as needed */
              }`}
            </style>
            <div className="dropdown">
              {/* <button className="dropdown-toggle" data-toggle="dropdown">Show Results</button> */}
              <div className="dropdown-menu narrow-dropdown">
                {/* Added class "narrow-dropdown" */}
                <ul id="searchResults" className="dropdown-content"></ul>
              </div>
            </div>
            <script src="script.js"></script>
          </div>
          <div className="oneone">
            <label htmlFor="when">When does your trip Start?</label>
            <input
              type="date"
              placeholder="26/11/23"
              id="when"
              // Add value and onChange props if you want to handle the state
            />
          </div>
          <div className="oneone">
            <label htmlFor="days">How many days will your trip be?</label>
            <input
              type="number"
              placeholder="Number of Days"
              id="days"
              min="0"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>
          <div className="oneone">
            <label htmlFor="people">How many people are going?</label>
            <input type="number" placeholder="0" id="people" min="0" />
          </div>
          <div className="oneone1">
            {/* ... (your checkbox code) */}
            <div class="oneone1">
              <p>Let others inspire from my trip</p>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <button className="createplan" onClick={place}>
            Create Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
