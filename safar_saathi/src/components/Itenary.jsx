import React from "react";
import GoogleMapsPage from "./map";
import "./Itenary.css";

const ItineraryCard = ({ itinerary }) => {
  return (
    <div className="itinerary-card">
      <h2>Generated Itinerary</h2>
      <div id="itinerary">{itinerary}</div>
    </div>
  );
};

const MainContent = ({ itinerary,place }) => {
  const handleVirtualTourClick = () => {
    // Redirect the user to the specified website
    window.location.href = "https://dev6800.d3bmebg203x87p.amplifyapp.com/";
  };

  return (
<div className="main-content">
   <div className="google-map">
     <GoogleMapsPage place={place}/>
   </div>
  <div className="itinerary-container">
    <ItineraryCard itinerary={itinerary} />
    <div className="virtual-tour-button" onClick={handleVirtualTourClick}>
      <strong>VIRTUAL TOUR</strong>
    </div>
  </div>
</div>
  );
};


export default MainContent;
