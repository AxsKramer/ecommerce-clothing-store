import {firestore} from './';

export const createUserProfileDocument = async (userAuth) => {
  
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.email}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {email, uid, photoURL, displayName} = userAuth;
    const createdAt = new Date();
    const displayNameStorage = JSON.parse(localStorage.getItem('user'));
    let displayNameF = displayName !== '' ? displayName : displayNameStorage.displayName;
    try {
      await userRef.set({email, createdAt, photoURL, uid, displayName: displayNameF });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
}

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