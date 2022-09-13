import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBU3N9NuEPgBkZfAkrqd9JkvkjgeG5b9n8",
  authDomain: "todo-25f53.firebaseapp.com",
  databaseURL: "https://todo-25f53-default-rtdb.firebaseio.com",
  projectId: "todo-25f53",
  storageBucket: "todo-25f53.appspot.com",
  messagingSenderId: "52324035103",
  appId: "1:52324035103:web:3e8b531210972e07e7c32a",
  measurementId: "G-T36WZ7MN99"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
    
  export default database;
  
