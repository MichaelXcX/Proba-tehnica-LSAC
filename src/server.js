import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3UH6bX-tRKsZ7jBs-mfmGT18RKQtpIm8",
  authDomain: "bazaroo-d2312.firebaseapp.com",
  databaseURL:
    "https://bazaroo-d2312-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bazaroo-d2312",
  storageBucket: "bazaroo-d2312.appspot.com",
  messagingSenderId: "262920695731",
  appId: "1:262920695731:web:0bbf8455282d28d2c9e5c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
