
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2kX-kruNxdWc0ClX3L6D2nrhLJg9mLKM",
  authDomain: "yt-clone-12345.firebaseapp.com",
  projectId: "yt-clone-12345",
  storageBucket: "yt-clone-12345.firebasestorage.app",
  messagingSenderId: "323783876398",
  appId: "1:323783876398:web:7e7662be3de1b59660e4bf"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }; 
