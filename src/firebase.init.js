// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9P9AsHxPHYdLuW30rP7Y1p6yeyHUY33E",
  authDomain: "zed-pay-a0ae9.firebaseapp.com",
  projectId: "zed-pay-a0ae9",
  storageBucket: "zed-pay-a0ae9.firebasestorage.app",
  messagingSenderId: "950102453183",
  appId: "1:950102453183:web:fa5d2ec39153e4fd95cf0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
