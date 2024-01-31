import React, { useState, useEffect } from "react";

const PreviousItinerary = () => {
  const email = localStorage.getItem("email");

  const [responseBody, setResponseBody] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({ email: email });
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        const response = await fetch(
          "https://4qcyee34jd.execute-api.ap-south-1.amazonaws.com/dev/get_itenary",
          requestOptions
        );

        const result = await response.text();
        const parsedResult = JSON.parse(result).body;

        const numberOfCards = Number(parsedResult);
        const cardData = Array.from({ length: numberOfCards }, (_, index) => ({
          id: index + 1,
          title: `${index + 1}`,
          content: `Content for ${email}_${index + 1}`,
        }));

        setResponseBody(cardData);

        console.log(parsedResult);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [email]);

  const handleCardClick = async (cardId) => {
    const itenary_id = email + "_" + cardId;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ id: itenary_id });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://4qcyee34jd.execute-api.ap-south-1.amazonaws.com/dev/get_itenary_data",
        requestOptions
      );

      const result = await response.text();
      const parsedResult = JSON.parse(result).body;

      console.log(parsedResult);
      setSelectedCardData(parsedResult);
    } catch (error) {
      console.error("Fetch error:", error);
    }

    setSelectedCard(cardId);
  };

  return (
    // ... rest of the component
    <div style={{ display: "flex" }}>
      {/* Left Column */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          borderRight: "1px solid #ccc",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>PREVIOUS PLANS</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {responseBody.map((card) => (
            <div
              key={card.id}
              style={{
                width: "100px",
                margin: "10px",
                padding: "10px",
                backgroundColor:
                  selectedCard === card.id
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(255, 255, 255, 0.8)",
                border: "1px solid #000",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "center",
                marginTop: "10px",
              }}
              onClick={() => handleCardClick(card.id)}
            >
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
          marginTop: "10px",
          textAlign: "center", // Center-align text horizontally
        }}
      >
        <h2>PLAN</h2>
        <div>
          {selectedCardData !== null ? (
            <div>
              <h3>{selectedCardData.title}</h3>
              <pre>{selectedCardData}</pre>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PreviousItinerary;
