
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCr2ST7ri5hfPO0MOOI6ZkQ32usTeKhYxo",
  authDomain: "elevana-7b85b.firebaseapp.com",
  databaseURL: "https://elevana-7b85b-default-rtdb.firebaseio.com",
  projectId: "elevana-7b85b",
  storageBucket: "elevana-7b85b.firebasestorage.app",
  messagingSenderId: "662429514215",
  appId: "1:662429514215:web:b64e8fc49d71d7ae932542",
  measurementId: "G-QF3454ELMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()