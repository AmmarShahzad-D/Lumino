// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8BAImqN6bKPHPuwQu4dkbUjJAqtlZNPI",
  authDomain: "lumino-1b73d.firebaseapp.com",
  projectId: "lumino-1b73d",
  storageBucket: "lumino-1b73d.firebasestorage.app",
  messagingSenderId: "185636584527",
  appId: "1:185636584527:web:0dbc21472d9875bc4afe3a",
  measurementId: "G-372YX8V86P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
