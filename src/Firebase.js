import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCcOkKsvAuk6r0IIpAL6HfaIzeHOzW9AWg",
    authDomain: "facebook-demo-123e0.firebaseapp.com",
    projectId: "facebook-demo-123e0",
    storageBucket: "facebook-demo-123e0.appspot.com",
    messagingSenderId: "744949906066",
    appId: "1:744949906066:web:38e667ca8ac1ef5ce0844b",
    measurementId: "G-BZ4Q3Z21VX"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

  const auth=firebase.auth();

  export {auth}
  export default db;
  