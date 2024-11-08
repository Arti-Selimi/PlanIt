import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB82qsCHZhkLC2-tKqVFtoFJSsU7pyODI0",
  authDomain: "evenmanagementproject.firebaseapp.com",
  databaseURL: "https://evenmanagementproject-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "evenmanagementproject",
  storageBucket: "evenmanagementproject.firebasestorage.app",
  messagingSenderId: "493625265933",
  appId: "1:493625265933:web:d145798ae6da5c880faa44"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app)

export { db, auth };
