import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAwpkGgwp2Bs0ePL846wuBNzNfxVJApcaw",
    authDomain: "project-bd9ef.firebaseapp.com",
    projectId: "project-bd9ef",
    storageBucket: "project-bd9ef.appspot.com",
    messagingSenderId: "822511742003",
    appId: "1:822511742003:web:28aab2ad50afcc6b584746"
}

let Firebase = firebase.initializeApp(firebaseConfig)
export default Firebase;
