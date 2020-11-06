import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSbm3yyUvYNPh0MriesY-aX76iQt1sk7o",
  authDomain: "discord-e8212.firebaseapp.com",
  databaseURL: "https://discord-e8212.firebaseio.com",
  projectId: "discord-e8212",
  storageBucket: "discord-e8212.appspot.com",
  messagingSenderId: "109349060733",
  appId: "1:109349060733:web:4d4f498781175aac59b114",
  measurementId: "G-Y8K9KK05HJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
