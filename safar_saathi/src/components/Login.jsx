import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPdg9Hui5AU55oZgIjTERUH1AmSgF6pII",
  authDomain: "safarsaathi5.firebaseapp.com",
  projectId: "safarsaathi5",
  storageBucket: "safarsaathi5.appspot.com",
  messagingSenderId: "877375595622",
  appId: "1:877375595622:web:c9f2c6b4dc0cf29460b9a7",
  measurementId: "G-2QYEZT7LYN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
      // Add the prompt parameter to force the account picker
      provider.setCustomParameters({
          prompt: 'select_account',
      });

      signInWithPopup(auth, provider)
          .then((result) => {
              const name = result.user.displayName;
              const email = result.user.email;
              const profilePic = result.user.photoURL;
              localStorage.setItem("name", name);
              localStorage.setItem("email", email);
              localStorage.setItem("profilePic", profilePic);
              resolve(); // Resolve the promise if sign-in is successful
          })
          .catch((error) => {
              console.error(error);
              reject(error); // Reject the promise if there's an error
          });
  });
};
