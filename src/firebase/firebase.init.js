// Do not share on public

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWemAiERq3Az_D190amcYeQCcp_acIwRQ",
  authDomain: "simple-firebase-auth-443cd.firebaseapp.com",
  projectId: "simple-firebase-auth-443cd",
  storageBucket: "simple-firebase-auth-443cd.firebasestorage.app",
  messagingSenderId: "189779532633",
  appId: "1:189779532633:web:de727f3d2c05beee3c8a48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

