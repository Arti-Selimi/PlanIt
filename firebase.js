import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "evenmanagementproject.firebaseapp.com",
  databaseURL: "https://evenmanagementproject-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "evenmanagementproject",
  storageBucket: "evenmanagementproject.appspot.com",
  messagingSenderId: "493625265933",
  appId: "1:493625265933:web:d145798ae6da5c880faa44"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
