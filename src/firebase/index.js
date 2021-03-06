import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyChXuUJJ8Hw2eeMApvtHpntpd2S39iPbiM",
  authDomain: "wolf-ecommerce.firebaseapp.com",
  projectId: "wolf-ecommerce",
  storageBucket: "wolf-ecommerce.appspot.com",
  messagingSenderId: "7620627961",
  appId: "1:7620627961:web:059d5dac36932915cec128"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
