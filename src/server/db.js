// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAquVLCn4V-0nk6fKYhWaPYkvUKi573_YY",
  authDomain: "puskesmas-kambang.firebaseapp.com",
  projectId: "puskesmas-kambang",
  storageBucket: "puskesmas-kambang.appspot.com",
  messagingSenderId: "364691791443",
  appId: "1:364691791443:web:5941a8bb263205c303b0a6",
  measurementId: "G-N5RSYZENQB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
