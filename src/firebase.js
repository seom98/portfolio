// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbKYdMBQiSgheEwyVaXW-K-uwvMVvHGqI",
    authDomain: "seom98-ac0f7.firebaseapp.com",
    projectId: "seom98-ac0f7",
    storageBucket: "seom98-ac0f7.appspot.com",
    messagingSenderId: "277776531341",
    appId: "1:277776531341:web:b644266e08f8c700d8c7c4",
    measurementId: "G-54ZN5759ZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
