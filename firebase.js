// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-flashcards-f5882.firebaseapp.com",
  projectId: "ai-flashcards-f5882",
  storageBucket: "ai-flashcards-f5882.appspot.com",
  messagingSenderId: "695334558330",
  appId: "1:695334558330:web:36eaba4c61238ede1379c3"
};

const errorMessages = {
  'auth/invalid-email': 'Invalid email address.',
  'auth/invalid-credential': 'Incorrect password.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/user-not-found': 'No user found with this email.',
  'auth/wrong-password': 'Incorrect password.',
  'auth/email-already-in-use': 'This email is already in use.',
  'auth/weak-password': 'Please choose a stronger password.',
  'auth/operation-not-allowed': 'This operation is not allowed. Please contact support.',
  'auth/requires-recent-login': 'Please log in again to continue.',
  'auth/invalid-action-code': 'The action code is invalid or has expired.',
  'auth/too-many-requests': 'Too many attempts. Please try again later.',
  'auth/network-request-failed': 'Network error. Please check your internet connection and try again.',
  'auth/invalid-verification-code': 'Invalid verification code. Please try again.',
  'auth/invalid-verification-id': 'Invalid verification ID. Please try again.',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, errorMessages }
