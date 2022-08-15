// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI2qB6mkgUL7OAb3jFAuOoMDPhstesmN4",
  authDomain: "portfolio-9bded.firebaseapp.com",
  projectId: "portfolio-9bded",
  storageBucket: "portfolio-9bded.appspot.com",
  messagingSenderId: "919461081336",
  appId: "1:919461081336:web:47c464643377f99f49cb0d",
  measurementId: "G-0R257W9C03"
};



var firebaseApp = null;
const apps = getApps()
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
  //const analytics = getAnalytics(firebaseApp);
} else {
  firebaseApp = apps[0]
}
const db = getFirestore(firebaseApp, {})
export { db }
