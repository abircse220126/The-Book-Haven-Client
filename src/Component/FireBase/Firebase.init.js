// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfMkHNQ5EERlF-63j9QlSkElHge-KXTJY",
  authDomain: "the-book-haven-40301.firebaseapp.com",
  projectId: "the-book-haven-40301",
  storageBucket: "the-book-haven-40301.firebasestorage.app",
  messagingSenderId: "1037048352165",
  appId: "1:1037048352165:web:300bfa635e9d7705996c4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);