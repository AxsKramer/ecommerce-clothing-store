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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.email}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName, email, uid, photoURL} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({displayName, email, createdAt, photoURL, uid, ...additionalData});
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
}

//This only for save collections in firestore
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc(obj.title);
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// }

export const  convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  }) 

  return transformCollection;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
