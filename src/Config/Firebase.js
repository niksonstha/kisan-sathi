import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: `${process.env.REACT_FIREBASE_API}`,
  authDomain: "farm-rental.firebaseapp.com",
  projectId: "farm-rental",
  storageBucket: "farm-rental.appspot.com",
  messagingSenderId: "10225842559",
  appId: "1:10225842559:web:b2188b37435ee1763e824a",
  measurementId: "G-LH8VF8X7PY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

