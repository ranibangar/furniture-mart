import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSCfiizZzc6j9wh2xStTDJhSNwHIh4uig",
  authDomain: "mymart-31cbd.firebaseapp.com",
  projectId: "mymart-31cbd",
  storageBucket: "mymart-31cbd.appspot.com",
  messagingSenderId: "840866184392",
  appId: "1:840866184392:web:95b92059efa249f97ab9fd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
