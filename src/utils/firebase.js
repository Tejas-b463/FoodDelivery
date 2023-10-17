// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTwHJUW12L5fQw2Q87pEKl_9iem5SB0Jo",
    authDomain: "instanteats-7a680.firebaseapp.com",
    projectId: "instanteats-7a680",
    storageBucket: "instanteats-7a680.appspot.com",
    messagingSenderId: "456754000910",
    appId: "1:456754000910:web:3a9697c68a0d2eba32385f",
    measurementId: "G-WPJK03MT5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
auth.languageCode = 'it';
const provider = new GoogleAuthProvider();
export { auth, provider };