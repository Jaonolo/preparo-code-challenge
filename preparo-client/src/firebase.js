import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDpjVR4sL6iKfhLeIJ55TGFD21DQXHVRVU",
  authDomain: "preparo-code-challenge.firebaseapp.com",
  projectId: "preparo-code-challenge",
  storageBucket: "preparo-code-challenge.appspot.com",
  messagingSenderId: "779847602676",
  appId: "1:779847602676:web:b7832a18291690d71969a1"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then((user) => {
        console.log('User signed in!')
        window.location.assign('/')
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`)
    });
}

export const logIn = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
        console.log('User created!')
        window.location.assign('/')
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`)
    });
    
}

export const signOut = () => {
    auth.signOut().then(() => {
        console.log('User logged out!')
        window.location.assign('/login')
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`)
    });
}