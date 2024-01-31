// PreviousItinerary.js

import React, { useState } from "react";

const PreviousItinerary = () => {
  const cardData = [
    { id: 1, title: "Card 1", content: "Content for Card 1" },
    { id: 2, title: "Card 2", content: "Content for Card 2" },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
    // Add more card data as needed
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Left Column */}
      <div style={{ flex: 1, padding: "20px", borderRight: "1px solid #ccc" }}>
        <h2>Left Column</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cardData.map((card) => (
            <div
              key={card.id}
              style={{
                width: "200px",
                margin: "10px",
                padding: "10px",
                backgroundColor:
                  selectedCard === card.id
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(255, 255, 255, 0.8)",
                border: "1px solid #000",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => handleCardClick(card.id)}>
              <h3>{card.title}</h3>
              {/* Omit content from here */}
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          height: "100vh",
          textAlign: "center", // Center-align text horizontally
        }}>
        <h2>Right Column</h2>
        <div>
          {selectedCard !== null ? (
            <div>
              <h3>{cardData[selectedCard - 1].title}</h3>
              <p>{cardData[selectedCard - 1].content}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PreviousItinerary;
