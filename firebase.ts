// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiQ63V6hEJ1i_Z4KVsjtwGCP0FRwuuyfs",
  authDomain: "nextflix-cf47b.firebaseapp.com",
  projectId: "nextflix-cf47b",
  storageBucket: "nextflix-cf47b.appspot.com",
  messagingSenderId: "373024015581",
  appId: "1:373024015581:web:b0c900267b713994024734",
  measurementId: "G-QLCW220BYT"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }