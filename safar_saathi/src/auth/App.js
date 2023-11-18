// import React, { useEffect, useState } from "react";
// import "./App.css";
// import { signInWithGoogle } from "./firebase";
// const logout =()=>{
//   localStorage.clear()
//   window.location.reload()
// }
// function App() {
//   return (
//     <div className="App">
//       <button class="login-with-google-btn" onClick={signInWithGoogle}>
//         Sign in with Google
//       </button>
      
//       <h1>{localStorage.getItem("name")}</h1>
//       <h1>{localStorage.getItem("email")}</h1>
//       <img src={localStorage.getItem("profilePic")} />
//         <div>
//             <button onClick={logout}>Logout</button>
//         </div> 
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import { signInWithGoogle } from "./firebase";
import { auth } from "./firebase"; // Import your Firebase configuration

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

function App() {
  return (
    <div className="App">
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>

      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} alt="Profile" />
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default App;
