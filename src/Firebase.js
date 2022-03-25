import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC3oUsf_HQdgxRPfHe8cglqR-GoJ3zFMMo",
  authDomain: "robinhood-8cf41.firebaseapp.com",
  projectId: "robinhood-8cf41",
  storageBucket: "robinhood-8cf41.appspot.com",
  messagingSenderId: "707386798953",
  appId: "1:707386798953:web:728d33ba09e5d5643583f8",
  measurementId: "G-JY2WFWN1K6"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };
