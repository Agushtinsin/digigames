// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3P1LMFwupcXK_WlAVeBiwxmjnNKmFtW4",
    authDomain: "digigamescoderhouse.firebaseapp.com",
    projectId: "digigamescoderhouse",
    storageBucket: "digigamescoderhouse.appspot.com",
    messagingSenderId: "900212825502",
    appId: "1:900212825502:web:ac502003a96456601d0a8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
