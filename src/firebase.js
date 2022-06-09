
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBU3N9NuEPgBkZfAkrqd9JkvkjgeG5b9n8",
    authDomain: "todo-25f53.firebaseapp.com",
    projectId: "todo-25f53",
    storageBucket: "todo-25f53.appspot.com",
    messagingSenderId: "52324035103",
    appId: "1:52324035103:web:c6f77a1aca5b0e0ce7c32a",
    measurementId: "G-F27TTQ6VFF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
    
  export default database;
  
