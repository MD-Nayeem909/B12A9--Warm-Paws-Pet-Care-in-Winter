// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx9eTrY8z-I4s3dgJh6nuOcowcpzyZY6M",
  authDomain: "b12a9-warmpaws.firebaseapp.com",
  projectId: "b12a9-warmpaws",
  storageBucket: "b12a9-warmpaws.firebasestorage.app",
  messagingSenderId: "1052233370006",
  appId: "1:1052233370006:web:e468a5490943f0db3235b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app