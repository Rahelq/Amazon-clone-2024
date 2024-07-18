// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";       //for authentication
import "firebase/compat/firestore"  // firestore to use their database
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC17O6DiKw1DOrXsaEpPTVU1ljPKpmsrGA",
	authDomain: "clone-edd82.firebaseapp.com",
	projectId: "clone-edd82",
	storageBucket: "clone-edd82.appspot.com",
	messagingSenderId: "103390285925",
	appId: "1:103390285925:web:f4b935dfbedb4f763e768c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


// after initialization let's export it for other components to use it which allow us to use everything for the authentication
export const auth =getAuth(app);   //export the project we created on firebase
export const db = app.firestore();