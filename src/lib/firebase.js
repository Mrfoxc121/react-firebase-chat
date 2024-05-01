import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-firebase-chat-b18c9.firebaseapp.com",
  projectId: "react-firebase-chat-b18c9",
  storageBucket: "react-firebase-chat-b18c9.appspot.com",
  messagingSenderId: "774857773373",
  appId: "1:774857773373:web:e18719f8594b5051dbb554"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()