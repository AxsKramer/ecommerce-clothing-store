import { shopTypes } from '../types';
import { firestore } from '../../firebase'; 
import {convertCollectionsSnapshotToMap} from '../../firebase/utils';

export const startFetchingCollections = () => ({
  type: shopTypes.GET_COLLECTION_FETCHING
});

export const fetchCollectionsSuccess = collections => ({
  type: shopTypes.GET_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopTypes.GET_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const getCollectionsFromFirebase = () => (dispatch) => {
  
  dispatch(startFetchingCollections());
  
  const collectionRef = firestore.collection('collections');
  
  collectionRef.get()
    .then(snapshot => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collections));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export const categorySelected = (category) => ({
  type: shopTypes.SHOW_CATEGORY_SELECTED,
  payload: category
}) 