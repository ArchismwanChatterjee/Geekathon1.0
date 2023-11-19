/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const GoogleMapsPage = ({ place }) => {
  // Construct the query string with the desired parameters
  const coordinates = '22.5449,88.345'; // Replace with the desired coordinates
const query = `https://maps.google.com/maps?q=${encodeURIComponent(
  coordinates
)}&t=m&z=15&output=embed&markers=${encodeURIComponent(coordinates)}`;


  return (
    <div>
      {/* <h1 className="google-maps-header">GOOGLE MAP</h1> */}

      <div className="map-container">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              style={{
                border: "0",
                overflow: "hidden",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "600px",
                height: "400px",
              }}
              marginHeight="0"
              marginWidth="0"
              src={query}
            ></iframe>
          </div>
        </div>
      </div>

      <style>
        {`
          * {
            padding: 0px;
            margin: 0px;
          }

          /* Your existing styles */

          .google-maps-header {
            font-size: 36px;
            font-weight: bold;
            color: #87ceeb; /* Sky text */
            background: #fff; /* White background */
            display: inline-block;
            border: 2px solid #87ceeb; /* Sky border */
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
            margin-top: 10px;
            margin-left: 160px;
          }

          .map-container {
            display: flex;
            justify-content: flex-end; /* Align to the right */
          }

          .mapouter {
            position: relative;
            text-align: right;
          }

          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            border-radius: 10px;
            padding: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }

          .gmap_iframe {
            width: 100%;
            height: 100%;
          }

          .gmap_canvas:hover {
            transform: translateY(-5px); /* Adjust the value for the desired lift */
          }
        `}
      </style>
    </div>
  );
};

export default GoogleMapsPage;

