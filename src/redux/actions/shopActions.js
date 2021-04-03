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

export const addShopItemLike = (item, category) => async (dispatch) => {
  
  const collectionItemsFirebase = await firestore.collection('collections').doc(category).get();

  const itemsFirebase = collectionItemsFirebase.data().items.map(itm => {
    return (itm.id === item.id) ? {...item, likes: Number(item.likes) + 1 } : itm;
  });

  const collectionUpdated = {
    items: itemsFirebase
  }

  firestore.collection('collections').doc(category).update(collectionUpdated)
    .then(() =>  {
      firestore.collection('collections').get()
        .then(snapshot => {
          const collections = convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collections));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    })
}

export const categorySelected = (category) => ({
  type: shopTypes.SHOW_CATEGORY_SELECTED,
  payload: category
}) 