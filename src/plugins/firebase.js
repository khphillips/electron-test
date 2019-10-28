//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: "AIzaSyAfjM4ba4sBoie2TFixnvB-sbZJ8rv_0To",
	authDomain: "electrontest-f1c63.firebaseapp.com",
	databaseURL: "https://electrontest-f1c63.firebaseio.com",
	projectId: "electrontest-f1c63",
	storageBucket: "electrontest-f1c63.appspot.com",
	messagingSenderId: "380449073510",
	appId: "1:380449073510:web:f8933cd9da53e1f12940a7",
	measurementId: "G-9BXG1XQVVN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// /firebase.analytics();

export default firebase.firestore();