// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC71bliFkQ9r58en9RlTCg_X3g6dcYyfyQ",
  authDomain: "multipage-login-signup.firebaseapp.com",
  projectId: "multipage-login-signup",
  storageBucket: "multipage-login-signup.firebasestorage.app",
  messagingSenderId: "73484214696",
  appId: "1:73484214696:web:f3a3adb771dc8974fb7d9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
