import { useEffect, useState } from "react";
import { getDatabase, ref, set, child, get } from "firebase/database";
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
  measurementId: "G-L0BDRVMEX2",
  databaseURL: "https://clinique-olory-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export function writeUserData(nom, prenom, age, sexe, contact, taille, tension,temperature) {
  const database = getDatabase(app);
    
    function uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = (c == 'x') ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    return  set(ref(database, 'patients/' + (uuid())), {
      patient_nom: nom,
      patient_prenom: prenom,
      patient_age: age,
      patient_sexe: sexe,
      patient_contact: contact,
      patient_taille: taille,
      patient_tension: tension,
      patient_temperature: temperature,
    });
}

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


export function getData(){
  return ref(getDatabase(app));
}