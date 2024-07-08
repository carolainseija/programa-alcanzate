// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

// Tu configuración de Firebase (ajusta con tus valores de configuración)
const firebaseConfig = {
  apiKey: "AIzaSyDfampmx807UrEYhYFgUMMJa_7-6mECbPw",
  authDomain: "iglesia-f485a.firebaseapp.com",
  projectId: "iglesia-f485a",
  storageBucket: "iglesia-f485a.appspot.com",
  messagingSenderId: "133587183223",
  appId: "1:133587183223:web:eb597f30428dfcac3e8872",
  measurementId: "G-SFX26TJMQN"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

const analytics = getAnalytics(app);
// Inicializa Firebase Storage
const storage = getStorage(app);

export { db, storage };
