
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1iRbGM5POSwO8coRsv01IxqVXZNYDsaI",
    authDomain: "social-media-app-e8b2b.firebaseapp.com",
    projectId: "social-media-app-e8b2b",
    storageBucket: "social-media-app-e8b2b.appspot.com",
    messagingSenderId: "776545293548",
    appId: "1:776545293548:web:d8fa892d9a5d2a90ebc1c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud firestore and get a reference
export const db = getFirestore(app);
