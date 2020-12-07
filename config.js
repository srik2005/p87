import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB8b-wtjK7r3VmDesqlLuOGRJuQ3O1l3NM",
  authDomain: "book-santa-f116c.firebaseapp.com",
  databaseURL: "https://book-santa-f116c.firebaseio.com",
  projectId: "book-santa-f116c",
  storageBucket: "book-santa-f116c.appspot.com",
  messagingSenderId: "192735029928",
  appId: "1:192735029928:web:ccfcbc3f5cbb2e0eb8709d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
