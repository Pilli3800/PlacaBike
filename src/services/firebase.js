// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjnDQ-Zc67dwNMHqRh-xkRrYgF16ZOlNw",
  authDomain: "placabike-5f044.firebaseapp.com",
  projectId: "placabike-5f044",
  storageBucket: "placabike-5f044.appspot.com",
  messagingSenderId: "614584926207",
  appId: "1:614584926207:web:85e58516998dd91fa9f1ca",
  measurementId: "G-X77SPRE249",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
