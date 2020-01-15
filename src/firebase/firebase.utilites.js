import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyA-Y9bG6ZyKkW2hdy3zQepQGL0i2QIDLE0",
    authDomain: "crown-db-c7e73.firebaseapp.com",
    databaseURL: "https://crown-db-c7e73.firebaseio.com",
    projectId: "crown-db-c7e73",
    storageBucket: "crown-db-c7e73.appspot.com",
    messagingSenderId: "564987077588",
    appId: "1:564987077588:web:cd2be317255aba9241ec41",
    measurementId: "G-0Z2QSNX99T"
  };
  firebase.initializeApp(config)
  export const auth =firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;