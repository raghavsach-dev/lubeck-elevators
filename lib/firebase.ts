// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl5JdqU0zViynp4barAgmazgtD6CH_W2E",
  authDomain: "lubeck-elevators.firebaseapp.com",
  projectId: "lubeck-elevators",
  storageBucket: "lubeck-elevators.firebasestorage.app",
  messagingSenderId: "282617292233",
  appId: "1:282617292233:web:57544bb98b4c57bf35f418",
  measurementId: "G-62Q2VX54Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;
