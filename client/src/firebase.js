// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-70a9b.firebaseapp.com',
  projectId: 'mern-blog-70a9b',
  storageBucket: 'mern-blog-70a9b.appspot.com',
  messagingSenderId: '894716582113',
  appId: '1:894716582113:web:ebd461ab8b39521b5b3fa0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
