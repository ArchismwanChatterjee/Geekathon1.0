import React from "react";
import GoogleMapsPage from "./map";

const ItineraryCard = ({ itinerary }) => {
  return (
    <div className="itinerary-card">
      <h2>Generated Itinerary</h2>
      <div>{itinerary}</div>
      <style>
        {`
          .itinerary-card {
            flex: 1;
            padding: 20px;
            margin-right: 20px;
            border-radius: 10px;
            background-color: #f5f5f5;
            margin-top: 15px;
          }
        `}
      </style>
    </div>
  );
};

const MainContent = ({ itinerary,place }) => {
  const handleVirtualTourClick = () => {
    // Redirect the user to the specified website
    window.location.href = "https://dev6800.d3bmebg203x87p.amplifyapp.com/";
  };

  return (
    <div
      className="main-content"
      style={{ paddingTop: "60px", position: "relative" }}
    >
      {/* Add upper padding here */}
      <GoogleMapsPage place={place}/>
      <ItineraryCard itinerary={itinerary} />
      {/* Hover button for Virtual Tour */}
      <div className="virtual-tour-button" onClick={handleVirtualTourClick}>
        <strong>VIRTUAL TOUR</strong>
      </div>
      <style>
        {`
          .main-content {
            display: flex;
          }

          .virtual-tour-button {
            cursor: pointer;
            position: absolute;
            bottom: -230px;
            left: 30px;
            padding: 10px;
            background-color: #fff;
            color: #000;
            border: 2px solid #000;
            border-radius: 5px;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .virtual-tour-button:hover {
            transform: translateY(-2px);
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default MainContent;
