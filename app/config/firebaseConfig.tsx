import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/functions";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBUamWcFkgxqLEY7lZigFCKtlP4EpZdmYg',
  authDomain: 'mindzen-5b9e1.firebaseapp.com',
  projectId: 'mindzen-5b9e1',
  storageBucket: 'mindzen-5b9e1.appspot.com',
  messagingSenderId: '210846054575',
  appId: '1:210846054575:web:03f5ad5fc38056fc2b3c5a',
  measurementId: 'G-2X5DCLXB20'
};

export const FIREBASE_APP = firebase.initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { firebase };
