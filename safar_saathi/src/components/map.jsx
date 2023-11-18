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
              style={{ border: "0", overflow: "hidden" }}
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
            width: 600px;
            height: 400px;
          }

          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            width: 600px;
            height: 400px;
          }

          .gmap_iframe {
            width: 600px !important;
            height: 400px !important;
          }
        `}
      </style>
    </div>
  );
};

export default GoogleMapsPage;
