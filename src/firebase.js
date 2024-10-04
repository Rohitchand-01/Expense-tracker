// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPYjTBDMSjwM1Y2waL-Pd1nvRTlAxYhuA",
  authDomain: "expense-tracker-faa4e.firebaseapp.com",
  projectId: "expense-tracker-faa4e",
  storageBucket: "expense-tracker-faa4e.appspot.com",
  messagingSenderId: "600209164283",
  appId: "1:600209164283:web:532f0eda75ea5cd8e7ed5e",
  measurementId: "G-PLTH2471TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };