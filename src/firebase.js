import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBOy4rf-0OhuAZYosrpcpC3u8v4ksAqGJA",
    authDomain: "twitter-clone-8d64a.firebaseapp.com",
    databaseURL: "https://twitter-clone-8d64a.firebaseio.com",
    projectId: "twitter-clone-8d64a",
    storageBucket: "twitter-clone-8d64a.appspot.com",
    messagingSenderId: "646036550077",
    appId: "1:646036550077:web:433c4bc6f09bf0be4aa2d4"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;