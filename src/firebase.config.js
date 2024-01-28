// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Pk2fh4F83r20blLZTuVhNFcdzO_RnPk",
  authDomain: "jobdekho-860d7.firebaseapp.com",
  projectId: "jobdekho-860d7",
  storageBucket: "jobdekho-860d7.appspot.com",
  messagingSenderId: "1061853073269",
  appId: "1:1061853073269:web:a06b65ca1ddec222e64d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db};