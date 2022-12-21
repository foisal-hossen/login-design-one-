// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5M0iNp0YSrpXN-5toa1tFjVW1Z1MNpaE",
  authDomain: "email-pass-react.firebaseapp.com",
  projectId: "email-pass-react",
  storageBucket: "email-pass-react.appspot.com",
  messagingSenderId: "694662049615",
  appId: "1:694662049615:web:6e5d695238626c84ad5f3a",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export default  app;
