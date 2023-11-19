/* eslint-disable no-unused-vars */
import "./plan_page.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PlanPage = ({ searchInput, date, days, people,setItinerary }) => {
  const [data, setData] = useState([]);
  const [matchingPlaces, setMatchingPlaces] = useState([]);
  const [elements, setElements] = useState([]);
  const navigate = useNavigate();
  //localStorage.setItem()
  localStorage.setItem("day", days);
  const Submit = () => {
    var output_list = [];
    var checkboxes = document.querySelectorAll(".check");
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        var parent = document.getElementById(checkbox.parentNode.id);
        var hi = parent.innerHTML.split("</h2>");
        hi = hi[0].split("<h2>");
        output_list.push(hi[1]);
      }
    });
    console.log("Output List:", output_list);
    setItinerary(output_list);
    navigate("/itinerary");
  };

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
        <button id="submit" onClick={Submit}>
          Submit
        </button>
      </div>
      <div className="data-container">{elements}</div>
    </div>
  );
};

export default PlanPage;
