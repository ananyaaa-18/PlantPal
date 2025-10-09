import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { db } from './firebase.js';
import { setDoc, doc } from "firebase/firestore";


// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuHjQZohof2eD-0D-cibetgXoVNlX0TQA",
  authDomain: "plantpal-a552e.firebaseapp.com",
  projectId: "plantpal-a552e",
  storageBucket: "plantpal-a552e.firebasestorage.app",
  messagingSenderId: "44877891019",
  appId: "1:44877891019:web:15848735c784b7b5c0224e",
  measurementId: "G-9S8EXT31ZT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

