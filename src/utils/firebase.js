import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();