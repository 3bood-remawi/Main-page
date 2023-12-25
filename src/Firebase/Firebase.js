
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';

const firebaseConfig = {
apiKey: "AIzaSyBz7t3SHf8jsuW9bcwjaZPXLcJTRXnWlak",
authDomain: "web-team-20.firebaseapp.com",
projectId: "web-team-20",
storageBucket: "web-team-20.appspot.com",
messagingSenderId: "758269130436",
appId: "1:758269130436:web:f40c6cc0ae85080a147b91",
measurementId: "G-PDCS3PXP9Q"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);