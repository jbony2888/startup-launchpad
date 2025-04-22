// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIf5yBfE_mf3ELMxM6RB4gHb__9Y5HzE0",
  authDomain: "start-up-launch-pad.firebaseapp.com",
  projectId: "start-up-launch-pad",
  storageBucket: "start-up-launch-pad.firebasestorage.app",
  messagingSenderId: "487987668180",
  appId: "1:487987668180:web:44006585299c0d170dc741"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize individual services
export const auth      = getAuth(app);
export const db        = getFirestore(app);
export const storage   = getStorage(app);

// If you need Analytics:
// import { getAnalytics } from "firebase/analytics";
// export const analytics = getAnalytics(app);

export default app;
