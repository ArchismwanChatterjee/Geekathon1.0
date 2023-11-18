/* eslint-disable no-unused-vars */
import "./plan_page.css";
import { useState, useEffect } from "react";

const matchingPlaces = [];
const elements = [];

const PlanPage = ({ searchInput, date, days, people }) => {
  const [data, setData] = useState([]);
  const [matchingPlaces, setMatchingPlaces] = useState([]);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/csvjson.json");
        const jsonData = await response.json();
        setData(jsonData);

        const places = jsonData
          .filter((entry) => entry.City === searchInput)
          .map((entry) => `${entry.Place} ~ ${entry.Place_desc}`);

        setMatchingPlaces(places);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchInput]);

  useEffect(() => {
    const newElements = matchingPlaces.map((place, index) => {
      const place1 = place.split("~");
      const nplace1 = place1[0];
      const nplace2 = place1[1];
      return (
        <div key={index} className="data-box" id={`place${index + 1}`}>
          <h2>{nplace1}</h2>
          <p>{nplace2}</p>
          <input
            type="checkbox"
            className="check"
            id={`checkbox${index + 1}`}
          />
        </div>
      );
    });

    setElements(newElements);
  }, [matchingPlaces]);

  return (
    <div>
      <div id="heading">
        <h1>Choose Places You Want To Visit</h1>
      </div>
      <div class="button-container">
        <button id="submit">Submit</button>
      </div>
      <div className="data-container">{elements}</div>
    </div>
  );
};

export default PlanPage;

