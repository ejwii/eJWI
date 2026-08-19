// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMxV9JC5ODp8LS4P6vFG5NGGHlTbkAnwA",
  authDomain: "ejwi-f2f1a.firebaseapp.com",
  projectId: "ejwi-f2f1a",
  storageBucket: "ejwi-f2f1a.firebasestorage.app",
  messagingSenderId: "13121909733",
  appId: "1:13121909733:web:9ddb97fa615a611cf5f50c",
  measurementId: "G-XV0J0GGBEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
