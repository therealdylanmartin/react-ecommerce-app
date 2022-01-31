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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log(err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

// Google Authentication

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;