// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import {getFirestore} from '@firebase/firestore'
import {getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import {v4} from 'uuid'

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const storage = getStorage(app)

export const auth = getAuth(app);

export async function uploadFile(file){
    const storageRef = ref(storage, 'escudos/'+v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}