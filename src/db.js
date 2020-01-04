import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyDucyv6wEVbfcOXHjVmKcPSlJext6xuAq8",
    authDomain: "twitter-clone-2a3db.firebaseapp.com",
    databaseURL: "https://twitter-clone-2a3db.firebaseio.com",
    projectId: "twitter-clone-2a3db",
    storageBucket: "twitter-clone-2a3db.appspot.com",
    messagingSenderId: "910981168092",
    appId: "1:910981168092:web:2df8bb135baff26b23ed19",
    measurementId: "G-LZT59QY4SD"
  };
  // Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();