// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuYA3btvlvnOCvS2H29ZKf-icfJMDBFmA",
  authDomain: "boulangeriedupeuple-5cefb.firebaseapp.com",
  databaseURL: "https://boulangeriedupeuple-5cefb-default-rtdb.firebaseio.com",
  projectId: "boulangeriedupeuple-5cefb",
  storageBucket: "boulangeriedupeuple-5cefb.appspot.com",
  messagingSenderId: "1059675962853",
  appId: "1:1059675962853:web:b7fa29f72204de2c83830c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
