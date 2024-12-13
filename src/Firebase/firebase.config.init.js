// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARXPKEsgCWyMUJSpAE2v2GwH0Q4J_a6fk",
  authDomain: "job-portal-7f6b9.firebaseapp.com",
  projectId: "job-portal-7f6b9",
  storageBucket: "job-portal-7f6b9.firebasestorage.app",
  messagingSenderId: "353131487562",
  appId: "1:353131487562:web:3d6b6cad5cdefc88ac61b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);