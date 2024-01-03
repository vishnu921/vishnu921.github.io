 import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXSAD0nb6mkS3Mi8Xgu0TrdcORcfOJ_K0",
  authDomain: "portfolio-f6b65.firebaseapp.com",
  projectId: "portfolio-f6b65",
  storageBucket: "portfolio-f6b65.appspot.com",
  messagingSenderId: "186189182757",
  appId: "1:186189182757:web:1c84ec0f279fcac5240ccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);