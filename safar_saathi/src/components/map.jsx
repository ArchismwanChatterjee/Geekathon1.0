/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const GoogleMapsPage = () => {
  return (
    <div>
      <h1>This is my Google Maps web page</h1>

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
              }}
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Victoria Memorial&amp;t=h&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://connectionsgame.org/">Connections NYT</a>
          </div>
        </div>
      </div>

      <style>
        {`
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
            width: 600px;
            height: 400px;
            border-radius: 10px;
            padding: 10px;
          }

          .gmap_iframe {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default GoogleMapsPage;
