import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBac_-T88ttJsksOn1dSIOfk7j-pJscA6Q",
    authDomain: "facebook-497f5.firebaseapp.com",
    databaseURL: "https://facebook-497f5.firebaseio.com",
    projectId: "facebook-497f5",
    storageBucket: "facebook-497f5.appspot.com",
    messagingSenderId: "906582687790",
    appId: "1:906582687790:web:895f1646a9a08213575fbf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default firebase