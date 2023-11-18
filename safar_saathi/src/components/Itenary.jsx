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

const MainContent = ({ itinerary }) => {
  return (
    <div className="main-content" style={{ paddingTop: "60px" }}>
      {/* Add upper padding here */}
      <GoogleMapsPage />
      <ItineraryCard itinerary={itinerary} />
      <style>
        {`
          .main-content {
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

export default MainContent;
