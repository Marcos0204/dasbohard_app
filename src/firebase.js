// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-firebase-e32b4.firebaseapp.com",
  projectId: "tutorial-firebase-e32b4",
  storageBucket: "tutorial-firebase-e32b4.appspot.com",
  messagingSenderId: "405310087541",
  appId: "1:405310087541:web:6483cf823556585955333c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);