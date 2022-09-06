import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzpMN6W9Oil3ngY6LMDWXL72Sg28DQI6o",
  authDomain: "caminhada-solidaria.firebaseapp.com",
  projectId: "caminhada-solidaria",
  storageBucket: "caminhada-solidaria.appspot.com",
  messagingSenderId: "1022901484357",
  appId: "1:1022901484357:web:18dfa998887c4ec232dc2c",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
