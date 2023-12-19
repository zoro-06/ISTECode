import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyCYVdwD2LYUENVMz2bw9PjnVv-oyzsELHI",
	authDomain: "istecode-5b7de.firebaseapp.com",
	projectId: "istecode-5b7de",
	storageBucket: "istecode-5b7de.appspot.com",
	messagingSenderId: "1037203629018",
	appId: "1:1037203629018:web:c7b7f0fa0f6508bd4616e3",
	measurementId: "G-C5DKM5JGFY"
  };
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
