import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCaWczK0PLxt8U025tHJW6AHWZxSOOuJX0",
  authDomain: "imagen-martino.firebaseapp.com",
  projectId: "imagen-martino",
  storageBucket: "imagen-martino.appspot.com",
  messagingSenderId: "75196927759",
  appId: "1:75196927759:web:59d66bce028e552b2db87a",
  measurementId: "G-MBMP02V55S"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
