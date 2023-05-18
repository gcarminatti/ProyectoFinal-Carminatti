// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfmNnz4UDJpgW70eBn2nILHJNe1H3L9qI",
  authDomain: "proyectofinalreact-carmi-8faee.firebaseapp.com",
  projectId: "proyectofinalreact-carmi-8faee",
  storageBucket: "proyectofinalreact-carmi-8faee.appspot.com",
  messagingSenderId: "1041752653182",
  appId: "1:1041752653182:web:0f670b2e8673463a4c472f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getDb = getFirestore(app);
