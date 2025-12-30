// src/firebase.ts
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "uptoskills-ai-learning.firebaseapp.com",
  projectId: "uptoskills-ai-learning",
  storageBucket: "uptoskills-ai-learning.firebasestorage.app",
  messagingSenderId: "954014117432",
  appId: "1:954014117432:web:29df6356b4eff7392c0cd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup };
