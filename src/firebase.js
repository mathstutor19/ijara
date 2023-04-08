// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqQyLshxDy-15M6ufQTrC8WVpbhDc-8uA',
  authDomain: 'iraja-fef5e.firebaseapp.com',
  projectId: 'iraja-fef5e',
  storageBucket: 'iraja-fef5e.appspot.com',
  messagingSenderId: '861295540696',
  appId: '1:861295540696:web:92b9e82b8b3bd1720b9aad',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
