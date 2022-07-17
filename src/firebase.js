import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAgdgZGXTFHJGUl66jfg1uYiq9zAIukvEQ",
  authDomain: "todo-891aa.firebaseapp.com",
  projectId: "todo-891aa",
  storageBucket: "todo-891aa.appspot.com",
  messagingSenderId: "35960037038",
  appId: "1:35960037038:web:dfd9fa706a43c2d815973f",
  measurementId: "G-2G74VQ1X8W"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
    
  export default database;
  
