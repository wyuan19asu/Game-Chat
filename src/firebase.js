// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
