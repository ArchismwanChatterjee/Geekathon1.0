import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Place from "./components/place";
import { Routes, Route } from "react-router-dom";
import PlanPage from "./components/PlanPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />}></Route>
        {/* <Route path="place" element={<Place />}></Route> */}
        <Route path="plan" element={<PlanPage />} />
      </Routes>
    </div>
  );
};

export default App;
