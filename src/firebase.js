import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAHhJmx49xPGULPW3bzDF_yKA8Ehk9ifY",
  authDomain: "liga-barrial-87176.firebaseapp.com",
  projectId: "liga-barrial-87176",
  storageBucket: "liga-barrial-87176.appspot.com",
  messagingSenderId: "706039122725",
  appId: "1:706039122725:web:dac71ca7e68858fce7a8cc",
  measurementId: "G-M0470KGKJX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
