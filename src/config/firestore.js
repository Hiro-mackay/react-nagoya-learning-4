import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCly0Hy02-EzQaLK4hD2t_AQCHKlnv5IBA",
  authDomain: "nagoya-chat.firebaseapp.com",
  databaseURL: "https://nagoya-chat.firebaseio.com",
  projectId: "nagoya-chat",
  storageBucket: "nagoya-chat.appspot.com",
  messagingSenderId: "735098716139",
  appId: "1:735098716139:web:d51ca3e046dcfacdd463ae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore();