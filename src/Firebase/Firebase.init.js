// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyRAJDbdyJZLfAWofHvxOrX0IzncYbWvU",
  authDomain: "simple-firebase-practice-5cd2c.firebaseapp.com",
  projectId: "simple-firebase-practice-5cd2c",
  storageBucket: "simple-firebase-practice-5cd2c.appspot.com",
  messagingSenderId: "684209720244",
  appId: "1:684209720244:web:44bf851e6698820d4c40e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;