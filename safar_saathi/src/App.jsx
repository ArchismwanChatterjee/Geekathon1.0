import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Place from "./components/place";
import { Routes, Route } from "react-router-dom";
import PlanPage from "./components/PlanPage";
import { signInWithGoogle } from "./components/Login";
import { auth } from "./components/Login"; // Import your Firebase configuration
import { useState } from "react";

const App = () => {
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.clear(); // You can choose to clear localStorage if needed
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const[user,setUser]=useState("");
  const[loggedIn,setLoggedIn]=useState("");

  function doLogin() {
    signInWithGoogle()
        .then(() => {
            setUser(localStorage.getItem("name"));
            setLoggedIn(true);
            var myHeaders = new Headers();
            var user_mail=localStorage.getItem("email")
      // add content type header to object
       myHeaders.append("Content-Type", "application/json");
       // using built in JSON utility package turn object to string and store in a variable
       var raw = JSON.stringify({"email": user_mail});
      // create a JSON object with parameters for API call and store in a variable
       var requestOptions = {
         method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
       };
       // make API call with parameters and use promises to get response
       fetch("https://4qcyee34jd.execute-api.ap-south-1.amazonaws.com/dev/ss_username", requestOptions)
         .then(response => response.text())
         .then(result => {
           const responseBody = JSON.parse(result).body;
           console.log(responseBody);
           
         })
         .catch(error => console.log('error', error));
         //console.log(localStorage.getItem("email"))
        })//hiiiiiiii
        .catch(error => {
            // Handle errors from signInWithGoogle
            console.error("Error signing in with Google:", error);
        });
}

  function doLogout(){
    logout();
    setUser("");
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <Navbar login={doLogin} logout={doLogout} user={user} loggedIn={loggedIn} />
      <Routes>
        <Route path="" element={<LandingPage />}></Route>
        {/* <Route path="place" element={<Place />}></Route> */}
        <Route path="plan" element={<PlanPage />} />
      </Routes>

    </div>
    
  );
};

export default App;
