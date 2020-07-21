import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3qFUN6dM8oP4UzRJp_u8vuXrswRYinzA",
    authDomain: "clone-88487.firebaseapp.com",
    databaseURL: "https://clone-88487.firebaseio.com",
    projectId: "clone-88487",
    storageBucket: "clone-88487.appspot.com",
    messagingSenderId: "530147043905",
    appId: "1:530147043905:web:057b31d00ee96df8eb74c0",
    measurementId: "G-E8CXNTLQRM"
});

const auth = firebase.auth();

export {  auth };