import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZQBZgGbSa2dQTYwobbxBASpwwRy4dFYo",
  authDomain: "clinique-olory.firebaseapp.com",
  projectId: "clinique-olory",
  storageBucket: "clinique-olory.appspot.com",
  messagingSenderId: "628177445880",
  appId: "1:628177445880:web:882cac3be7b5f55a26ec0d",
  measurementId: "G-L0BDRVMEX2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

export function isConnected(status){
  // const [isgood, setIsgood] = useState(false);
  // setIsgood(status);

  // return isgood;
}
