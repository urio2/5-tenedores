import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUFuCaplDUGdfcHO54IOPsxScBVXREi_k",
  authDomain: "tenedores-ea713.firebaseapp.com",
  projectId: "tenedores-ea713",
  storageBucket: "tenedores-ea713.appspot.com",
  messagingSenderId: "764322251736",
  appId: "1:764322251736:web:2293ea5b93d5f438fda8ad"
};

export const  firebaseApp = firebase.initializeApp(firebaseConfig);