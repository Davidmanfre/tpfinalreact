import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGm5EaDeW7DL4TUGk6iEdNZcXCfwPDWlI",
  authDomain: "reactcommerce1.firebaseapp.com",
  projectId: "reactcommerce1",
  storageBucket: "reactcommerce1.firebasestorage.app",
  messagingSenderId: "917370816618",
  appId: "1:917370816618:web:1462b197613cc4b122a213",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
