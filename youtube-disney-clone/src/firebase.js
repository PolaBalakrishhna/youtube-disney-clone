import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwOSLtnaC-W4kcxFzkVwiZaz9WzpbHpGU",
    authDomain: "disneyplus-clone-45799.firebaseapp.com",
    projectId: "disneyplus-clone-45799",
    storageBucket: "disneyplus-clone-45799.appspot.com",
    messagingSenderId: "87283316384",
    appId: "1:87283316384:web:89b05af3b14984bf87fbc5",
    measurementId: "G-BVNLKRSHLM"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;