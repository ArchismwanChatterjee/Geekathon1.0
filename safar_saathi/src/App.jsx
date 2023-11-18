import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import PlanPage from './components/PlanPage';
const App = () => {
  return (
     <div>
       <PlanPage/>
=======
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
>>>>>>> f4c321710ce8a8efd6e8df441a0222d9311dbfa4
    </div>
    
  );
};

export default App;
