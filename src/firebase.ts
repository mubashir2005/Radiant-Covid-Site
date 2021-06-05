import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDrG3V3HWKdwSQ3OuI9WRjCpWKwDP44FyY",
  authDomain: "radiant-covid-portal.firebaseapp.com",
  projectId: "radiant-covid-portal",
  storageBucket: "radiant-covid-portal.appspot.com",
  messagingSenderId: "513513263779",
  appId: "1:513513263779:web:a003d332812c7cdc512516",
  measurementId: "G-8T30SKM854",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firebaseApp = firebase.app();

export { firebaseApp };
