// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2y1LgqttiNPdTNOlQy1PA_0V4VOy6lqA",
    authDomain: "email-password-auth-b03b1.firebaseapp.com",
    projectId: "email-password-auth-b03b1",
    storageBucket: "email-password-auth-b03b1.appspot.com",
    messagingSenderId: "384674072119",
    appId: "1:384674072119:web:049e98cf5f3a150db761b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;