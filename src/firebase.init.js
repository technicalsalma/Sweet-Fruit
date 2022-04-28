// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLuZHtGb905lNucElGWQP9E8557jkKLFk",
  authDomain: "sweet-fruit-house.firebaseapp.com",
  projectId: "sweet-fruit-house",
  storageBucket: "sweet-fruit-house.appspot.com",
  messagingSenderId: "84878274152",
  appId: "1:84878274152:web:ce7c71d7a06513708c95dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;