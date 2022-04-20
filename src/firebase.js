// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBa5SU-ARfVbjdHCIL-hJCAISXHecq85U",
  authDomain: "tienda-de-felipe.firebaseapp.com",
  projectId: "tienda-de-felipe",
  storageBucket: "tienda-de-felipe.appspot.com",
  messagingSenderId: "468722131233",
  appId: "1:468722131233:web:7a8997406f52cb858b5e60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
