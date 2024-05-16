
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8daxvPV3RhyhJh0U3e9iJ31VAqpFwhQA",
    authDomain: "gymbro-804f1.firebaseapp.com",
    projectId: "gymbro-804f1",
    storageBucket: "gymbro-804f1.appspot.com",
    messagingSenderId: "557306326473",
    appId: "1:557306326473:web:e431988e7ce5a38578cc18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export default app;