// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACHtfHBBHmSA9uhzeSg890au_Nne_LLDw",
  authDomain: "flowsync-6d45c.firebaseapp.com",
  projectId: "flowsync-6d45c",
  storageBucket: "flowsync-6d45c.firebasestorage.app",
  messagingSenderId: "693117676807",
  appId: "1:693117676807:web:0d6dd510946edaeb2a69a2",
  measurementId: "G-2P92RQQCEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the authentication instance
export const auth = getAuth(app);
export default app;