import React, { useState } from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

// import "./script.js"; // Assuming this is the file where you have your JavaScript logic

const LandingPage = ({createPlan}) => {
  const [searchInput, setSearchInput] = useState("");
  const [date, setDate] = useState("");
  const [days, setDays] = useState("");
  const [people, setPeople] = useState("");

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
            {/* ... (your dropdown code) */}
          </div>
          <div className="oneone">
            <label htmlFor="when">When does your trip Start?</label>
            <input
              type="date"
              placeholder="26/11/23"
              id="when"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
            <input
              type="number"
              placeholder="0"
              id="people"
              min="0"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
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
          <Link to="/plan" className="createplan" onClick={()=>createPlan(searchInput,date,days,people)}>
            Create Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
