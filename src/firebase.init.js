// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSrWQlgLcJKD78HD-tehGnrrPnTbbObLw",
  authDomain: "coffee-auth-c8a6b.firebaseapp.com",
  projectId: "coffee-auth-c8a6b",
  storageBucket: "coffee-auth-c8a6b.firebasestorage.app",
  messagingSenderId: "512615624338",
  appId: "1:512615624338:web:6f28a4a530fcbda056004b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);