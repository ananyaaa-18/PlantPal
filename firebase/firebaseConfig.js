// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuHjQZohof2eD-0D-cibetgXoVNlX0TQA",
  authDomain: "plantpal-a552e.firebaseapp.com",
  projectId: "plantpal-a552e",
  storageBucket: "plantpal-a552e.firebasestorage.app",
  messagingSenderId: "44877891019",
  appId: "1:44877891019:web:15848735c784b7b5c0224e",
  measurementId: "G-9S8EXT31ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, app };
