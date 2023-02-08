// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQKP3VXebVP5ADsbVlbixEpmIXSEA7BWk",
  authDomain: "gamechat-7b44f.firebaseapp.com",
  projectId: "gamechat-7b44f",
  storageBucket: "gamechat-7b44f.appspot.com",
  messagingSenderId: "962453569826",
  appId: "1:962453569826:web:e898e8517efd646514a57b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
