// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6dd6c.firebaseapp.com",
  projectId: "mern-estate-6dd6c",
  storageBucket: "mern-estate-6dd6c.appspot.com",
  messagingSenderId: "99578517730",
  appId: "1:99578517730:web:46f33b2ce887282dd3e6bb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
