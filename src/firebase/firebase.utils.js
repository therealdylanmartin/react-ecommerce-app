import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCklRkPcBrFlbNA3epuo_yLAAVd5koWFc0",
  authDomain: "react-ecommerce-app-c3793.firebaseapp.com",
  projectId: "react-ecommerce-app-c3793",
  storageBucket: "react-ecommerce-app-c3793.appspot.com",
  messagingSenderId: "37914827731",
  appId: "1:37914827731:web:9a94db435af9fae029ad26",
  measurementId: "G-SYWKZ4LCFT"
}

firebase.initializeApp(config);

// Google Authentication

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
console.log(provider);
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;