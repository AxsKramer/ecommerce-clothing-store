import React, {useEffect} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Layout from '../container/Layout';
import Routes from '../routes/Routes';
// import MetaHelmet from '../components/MetaHelmet/MetaHelmet';

import {userConnected} from '../redux/actions/userActions';

import {auth} from '../firebase';
import {createUserProfileDocument, addCollectionAndDocuments} from '../firebase/utils';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      dispatch(userConnected(user));
    }
      const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot => {
            dispatch(userConnected({
              id: snapshot.id,
              ...snapshot.data()})
            )
          })
        }
        dispatch(userConnected(null));
      });
      //This only for save collections in firestore
      // addCollectionAndDocuments("collections", shop.map(({title, items}) => ({title, items})));
      return () => unsubscribeFromAuth();
  },[]);
  
  return (
    <BrowserRouter>
      <Layout >
        <Switch>
          <Routes />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
