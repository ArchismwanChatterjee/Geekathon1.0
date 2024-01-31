import React, { useState, useEffect } from "react";
import GoogleMapsPage from "./map";
import "./Itenary.css";

const ItineraryCard = ({ itinerary }) => {
  const day = localStorage.getItem("day");
  const [responseBody, setResponseBody] = useState(null);
  const email = localStorage.getItem("email");
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ day: day, place: itinerary, email: email });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://4qcyee34jd.execute-api.ap-south-1.amazonaws.com/dev/ghumo_bharat",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const parsedResult = JSON.parse(result).body;
        setResponseBody(parsedResult);
        console.log(parsedResult);
      })
      .catch((error) => console.log("error", error));
  }, [day, itinerary]);

  return (
    <div className="itinerary-card">
      <h2>Generated Itinerary</h2>
      <div id="itinerary">
        <pre>{responseBody}</pre>
      </div>
    </div>
  );
};

const MainContent = ({ itinerary, place }) => {
  const handleVirtualTourClick = () => {
    window.location.href = "https://dev6800.d3bmebg203x87p.amplifyapp.com/";
  };

  return (
    <div className="main-content">
      <div className="google-map">
        <GoogleMapsPage place={place} />
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
