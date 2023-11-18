// const searchInput = document.getElementById("searchInput");
// const searchResults = document.getElementById("searchResults");
// const dropdownContent = document.querySelector(".dropdown-content");

// List of locations
export const locations = [
  "Manali",
  "Leh Ladakh",
  "Coorg",
  "Andaman",
  "Lakshadweep",
  "Goa",
  "Udaipur",
  "Srinagar",
  "Gangtok",
  "Munnar",
  "Varkala",
  "Mcleodganj",
  "Rishikesh",
  "Alleppey",
  "Darjeeling",
  "Nainital",
  "Shimla",
  "Ooty",
  "Jaipur",
  "Lonavala",
  "Mussoorie",
  "Kodaikanal",
  "Dalhousie",
  "Pachmarhi",
  "Varanasi",
  "Mumbai",
  "Agra",
  "Kolkata",
  "Jodhpur",
  "Bangalore",
  "Amritsar",
  "Delhi",
  "Jaisalmer",
  "Mount Abu",
  "Wayanad",
  "Hyderabad",
  "Pondicherry",
  "Khajuraho",
  "Chennai",
  "Vaishno Devi",
  "Ajanta and Ellora Caves",
  "Haridwar",
  "Kanyakumari",
  "Pune",
  "Kochi",
  "Ahmedabad",
  "Mysore",
  "Chandigarh",
  "Hampi",
  "Gulmarg",
  "Almora",
  "Shirdi",
  "Auli",
  "Madurai",
  "Amarnath",
  "Bodh Gaya",
  "Mahabaleshwar",
  "Visakhapatnam",
  "Kasol",
  "Nashik",
  "Tirupati",
  "Ujjain",
  "Jim Corbett National Park",
  "Gwalior",
  "Mathura",
  "Alibaug",
  "Rameshwaram",
  "Vrindavan",
  "Coimbatore",
  "Lucknow",
  "Digha",
  "Dharamshala",
  "Kovalam",
  "Madikeri",
  "Matheran",
  "Ranthambore",
  "Agartala",
  "Khandala",
  "Kalimpong",
  "Thanjavur",
  "Bhubaneswar",
  "Ajmer",
  "Aurangabad",
  "Jammu",
  "Dehradun",
  "Puri",
  "Cherrapunji",
  "Bikaner",
  "Shimoga (Shivamogga)",
  "Hogenakkal",
  "Kasauli",
  "Pushkar",
  "Chittorgarh",
  "Nahan",
  "Lavasa",
  "Poovar",
];

// searchInput.addEventListener("input", function () {
//   const searchTerm = searchInput.value.toLowerCase();

//   // Filter locations based on the search term
//   const filteredLocations = locations.filter((location) =>
//     location.toLowerCase().includes(searchTerm)
//   );

//   // Clear previous results
//   dropdownContent.innerHTML = "";

//   function handleOptionClick(optionText) {
//     searchInput.value = optionText;
//     dropdownContent.parentElement.style.display = "none"; // Hide the dropdown
//   }

//   // Add new results
//   if (filteredLocations.length > 0) {
//     filteredLocations.forEach((location) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = location;
//       // Add click event listener to the option
//       listItem.addEventListener("click", function () {
//         handleOptionClick(location);
//       });
//       dropdownContent.appendChild(listItem);
//     });

//     // Make the dropdown menu scrollable if it exceeds a certain height
//     if (dropdownContent.scrollHeight > 200) {
//       dropdownContent.style.maxHeight = "125px"; // Adjust the maximum height as needed
//       dropdownContent.style.overflowY = "scroll";
//     } else {
//       dropdownContent.style.maxHeight = "none";
//       dropdownContent.style.overflowY = "auto";
//     }

//     // Show the dropdown
//     dropdownContent.parentElement.style.display = "block";
//   } else {
//     // Hide the dropdown if there are no results
//     dropdownContent.parentElement.style.display = "none";
//   }
// });