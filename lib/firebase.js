import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYPTpZTKLlqYD-j3YcMbIJADYpPusZuGg",
  authDomain: "portfolio2-a66c9.firebaseapp.com",
  projectId: "portfolio2-a66c9",
  storageBucket: "portfolio2-a66c9.appspot.com",
  messagingSenderId: "126116536095",
  appId: "1:126116536095:web:c696aecfc28d3190205a2a",
  measurementId: "G-M4KY3W5XGV"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storeage();
