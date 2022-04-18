// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWmKtDhXhQQJvWis4J19eqfFdm9v4UN3k",
  authDomain: "simple-gym-trainer.firebaseapp.com",
  projectId: "simple-gym-trainer",
  storageBucket: "simple-gym-trainer.appspot.com",
  messagingSenderId: "399812034561",
  appId: "1:399812034561:web:5c84efe90f981b54aa8000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;