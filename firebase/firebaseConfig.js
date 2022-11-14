import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyC3DXbsmffebY095mdQDrhO97n3cJoFiQI",
    authDomain: "pidm22.firebaseapp.com",
    projectId: "pidm22",
    storageBucket: "pidm22.appspot.com",
    messagingSenderId: "349202038818",
    appId: "1:349202038818:web:0ba944e8943fe104684a7b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
