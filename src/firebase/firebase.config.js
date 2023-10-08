// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb3Ih9-DVVv3ZisW3Qk7iamoK9DfBw3Kg",
  authDomain: "event-management-assignm-e9c86.firebaseapp.com",
  projectId: "event-management-assignm-e9c86",
  storageBucket: "event-management-assignm-e9c86.appspot.com",
  messagingSenderId: "746644629486",
  appId: "1:746644629486:web:6aebfffedc079136a410ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
