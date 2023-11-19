import React, { useState } from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = ({ createPlan }) => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [date, setDate] = useState("");
  const [days, setDays] = useState("");
  const [people, setPeople] = useState("");

  const locations = [
    "Manali",
    "Leh Ladakh",
    "Coorg",
    "Andaman",
    "Lakshadweep",
    "Goa",
    "Udaipur",
    "Srinagar",
    "Gangtok",
    "Munnar",
    "Varkala",
    "Mcleodganj",
    "Rishikesh",
    "Alleppey",
    "Darjeeling",
    "Nainital",
    "Shimla",
    "Ooty",
    "Jaipur",
    "Lonavala",
    "Mussoorie",
    "Kodaikanal",
    "Dalhousie",
    "Pachmarhi",
    "Varanasi",
    "Mumbai",
    "Agra",
    "Kolkata",
    "Jodhpur",
    "Bangalore",
    "Amritsar",
    "Delhi",
    "Jaisalmer",
    "Mount Abu",
    "Wayanad",
    "Hyderabad",
    "Pondicherry",
    "Khajuraho",
    "Chennai",
    "Vaishno Devi",
    "Ajanta and Ellora Caves",
    "Haridwar",
    "Kanyakumari",
    "Pune",
    "Kochi",
    "Ahmedabad",
    "Mysore",
    "Chandigarh",
    "Hampi",
    "Gulmarg",
    "Almora",
    "Shirdi",
    "Auli",
    "Madurai",
    "Amarnath",
    "Bodh Gaya",
    "Mahabaleshwar",
    "Visakhapatnam",
    "Kasol",
    "Nashik",
    "Tirupati",
    "Ujjain",
    "Jim Corbett National Park",
    "Gwalior",
    "Mathura",
    "Alibaug",
    "Rameshwaram",
    "Vrindavan",
    "Coimbatore",
    "Lucknow",
    "Digha",
    "Dharamshala",
    "Kovalam",
    "Madikeri",
    "Matheran",
    "Ranthambore",
    "Agartala",
    "Khandala",
    "Kalimpong",
    "Thanjavur",
    "Bhubaneswar",
    "Ajmer",
    "Aurangabad",
    "Jammu",
    "Dehradun",
    "Puri",
    "Cherrapunji",
    "Bikaner",
    "Shimoga (Shivamogga)",
    "Hogenakkal",
    "Kasauli",
    "Pushkar",
    "Chittorgarh",
    "Nahan",
    "Lavasa",
    "Poovar",
  ];

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter locations based on the input value
    const filteredLocations = locations.filter((location) =>
      location.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSuggestions(filteredLocations);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
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
              onChange={handleInputChange}
            />
            {suggestions.length > 0 && (
              <div className="dropdown">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="oneone">
            <label htmlFor="when">When does your trip Start?</label>
            <input
              type="date"
              placeholder="26/11/23"
              id="when"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
            <div className="oneone1">
              <p>Let others inspire from my trip</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <Link
            to="/plan"
            className="createplan"
            onClick={() => createPlan(searchInput, date, days, people)}
          >
            Create Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;