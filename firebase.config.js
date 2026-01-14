import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  
  import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
  } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

  import {
    getFirestore, collection, doc, getDoc, getDocs, addDoc, query, where, orderBy
  } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyBfupaVQsnjRfA08dvkK9nWnYMafVP6Ons",
    authDomain: "blog-bfc3d.firebaseapp.com",
    projectId: "blog-bfc3d",
    storageBucket: "blog-bfc3d.firebasestorage.app",
    messagingSenderId: "317599664424",
    appId: "1:317599664424:web:c03ff6695ac4e9d4f2281d"
  };

  


  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  const db = getFirestore(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
  orderBy
};