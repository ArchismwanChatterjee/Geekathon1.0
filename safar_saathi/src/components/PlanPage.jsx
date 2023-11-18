import "./plan_page.css";
import { useState, useEffect } from "react";

const matchingPlaces = [];
const elements = [];

const PlanPage = () => {
  const [data, setData] = useState([]);
  const loca = "Manali";

  useEffect(() => {
    // Assuming you have the data.json file in the public folder
    fetch("/csvjson.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        
        for (const entry of jsonData) {
          if (entry.City === loca) {
            const placeDesc = `${entry.Place} ~ ${entry.Place_desc}`;
            matchingPlaces.push(placeDesc);
          }
        }
        console.log(matchingPlaces.length);

        for (let index = 0; index < matchingPlaces.length; index++) {
          const place = matchingPlaces[index];
          const place1 = place.split("~");
          const nplace1 = place1[0];
          const nplace2 = place1[1];
          console.log(nplace1);
          elements.push(
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
        }
        console.log(elements);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [loca]);

  return <div className="data-container">{elements}</div>;
};

export default PlanPage;
