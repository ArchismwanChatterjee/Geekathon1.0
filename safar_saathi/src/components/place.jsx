// import React, { useEffect, useState } from 'react';

// const CitySearch = () => {
//   const [loca, setLoca] = useState(localStorage.getItem('loc') || '');
//   const [matchingPlaces, setMatchingPlaces] = useState([]);
//   const [outputList, setOutputList] = useState([]);

//   useEffect(() => {
//     if (loca !== 'Leh Ladakh' && loca !== 'Ajanta and Ellora Caves') {
//       setLoca(loca.toLowerCase());
//       setLoca(loca[0].toUpperCase() + loca.slice(1));
//     }
//     searchCity();
//   }, [loca]);

//   const searchCity = () => {
//     const matchingPlacesArray = [];
//     fetch('csvjson.json')
//       .then((response) => response.json())
//       .then((jsonData) => {
//         for (const entry of jsonData) {
//           if (entry.City === loca) {
//             const placeDesc = `${entry.Place}~${entry.Place_desc}`;
//             matchingPlacesArray.push(placeDesc);
//           }
//         }
//         setMatchingPlaces(matchingPlacesArray);
//       })
//       .catch((error) => console.error('Error fetching JSON:', error));

//     const citySelect = document.getElementById('city_selec');
//     citySelect.style.display = 'none';
//     const submitButton = document.getElementById('submitButton');
//     submitButton.style.display = 'block';
//   };

//   const displayMatchingPlaces = (matchingPlaces) => {
//     const matchingPlacesList = document.getElementById('matchingPlaces');
//     matchingPlacesList.innerHTML = '';

//     if (matchingPlaces.length === 0) {
//       matchingPlacesList.innerHTML = '<li>No matching places found.</li>';
//     } else {
//       matchingPlaces.forEach((place) => {
//         const [title, desc] = place.split('~');
//         const [id1, tpart] = title.split('.');
//         const para = document.createElement('P');
//         para.classList.add('card');
//         para.setAttribute('id', id1);
//         para.innerHTML = `<strong>${tpart}</strong><br>${desc}`;
//         const x = document.createElement('INPUT');
//         x.setAttribute('type', 'checkbox');
//         x.classList.add('checkboxx');
//         para.appendChild(x);
//         matchingPlacesList.appendChild(para);
//       });
//     }
//   };

//   const getInput = () => {
//     const checkboxes = document.querySelectorAll('.checkboxx');
//     const outputListArray = [];
//     checkboxes.forEach((checkbox) => {
//       if (checkbox.checked) {
//         const parent = document.getElementById(checkbox.parentNode.id);
//         const hi = parent.innerHTML.split('</strong>');
//         outputListArray.push(hi[1]);
//       }
//     });
//     setOutputList(outputListArray);
//     localStorage.setItem('output', outputListArray);
//     window.location.href = 'new_generated_itinerary.html';
//   };

//   return (
//     <div>
//       <h1 id="place_name" style={{ fontWeight: 'bold' }}>
//         Choose the destination places
//       </h1>
//       <div id="city_selec">
//         <label htmlFor="cityInput">Enter a city:</label>
//         <input type="text" id="cityInput" />
//         <button onClick={searchCity}>Search</button>
//       </div>
//       <br />
//       <button
//         id="submitButton"
//         style={{
//           position: 'fixed',
//           bottom: '20px',
//           right: '20px',
//           zIndex: '1',
//           backgroundColor: 'aqua',
//         }}
//         onClick={getInput}
//       >
//         submit choices
//       </button>
//       <ul id="matchingPlaces" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}></ul>
//     </div>
//   );
// };

// export default CitySearch;
