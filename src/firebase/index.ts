import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBzZyDIRtv8Jy6-gfjcuRK-XAB977O_iR8",
    authDomain: "task-tracker-d6621.firebaseapp.com",
    databaseURL: "https://task-tracker-d6621.firebaseio.com",
    projectId: "task-tracker-d6621",
    storageBucket: "task-tracker-d6621.appspot.com",
    messagingSenderId: "115153427938",
    appId: "1:115153427938:web:849354bb106ef2f9702dbb",
    measurementId: "G-RMBZ6MEWMV"
  };

  export default firebase.initializeApp(firebaseConfig);

  