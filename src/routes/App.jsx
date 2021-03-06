import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Layout from '../container/Layout';
import LoginPage from '../pages/Login/Login';
import RegisterPage from '../pages/Register/Register';
import HomePage from '../pages/Home/Home';
import ShopPage from '../pages/Shop/Shop';
import ShopCategoryPage from '../pages/ShopCategory/ShopCategory';
import CheckoutPage from '../pages/Checkout/Checkout';
import CategoriesPage from '../pages/Categories/Categories';
import UserPage from '../pages/User/User';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

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
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/sign-up' component={RegisterPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/shop/:category' component={ShopCategoryPage} />
          <Route exact path='/categories' component={CategoriesPage} />
          <PrivateRoute item='user' exact path='/checkout' component={CheckoutPage} />
          <PrivateRoute item='user' excat path='/user/:userName' component={UserPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
