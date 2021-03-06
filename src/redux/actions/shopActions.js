import { shopTypes, appTypes } from '../types';
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase'; 

export const categorySelected = (category) => (dispatch) => {
  dispatch({
    type: shopTypes.SHOW_CATEGORY_SELECTED,
    payload: category
  })
}

export const getCollectionsFromFirebase = () => async (dispatch) => {

  dispatch({type: appTypes.LOADING});

  const collectionRef = await firestore.collection('collections');
  collectionRef.onSnapshot(async snapshot => {
    const collections = convertCollectionsSnapshotToMap(snapshot);
    dispatch({type: shopTypes.GET_COLLECTIONS_FIREBASE, payload: collections})
  });

}