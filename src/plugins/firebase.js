//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");
import firebaseConfig from './firebaseConfig.js'
import firebase from 'firebase/app';
import 'firebase/firestore';


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// /firebase.analytics();

export default firebase.firestore();