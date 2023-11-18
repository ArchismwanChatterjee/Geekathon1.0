import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Place from "./components/place"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path=""
          element={
            <>
              <LandingPage />
            </>
          }></Route>
          <Route
          path="places"
          element={
            <>
              <Place/>
            </>
          }></Route>
      </Routes>
    </div>
  );
};

export default App;
