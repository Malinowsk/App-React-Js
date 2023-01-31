import { initializeApp } from "firebase/app";
import { getFirestore , collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWfPMMo3xyZfXCYv_9YmttL5i8_W7vZcU",
  authDomain: "cervezas-21568.firebaseapp.com",
  projectId: "cervezas-21568",
  storageBucket: "cervezas-21568.appspot.com",
  messagingSenderId: "295264864097",
  appId: "1:295264864097:web:2a0af348d2b327e54f2720",
  measurementId: "G-M9LSC3Y3ZL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
export const productsCollection = collection(db,"cervezas");
export const ventasCollection = collection(db,"ventas");
