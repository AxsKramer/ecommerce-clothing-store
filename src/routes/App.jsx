import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
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
import {userConnect} from '../redux/actions/userActions';
import {useSelector} from 'react-redux';

import {auth, createUserProfileDocument} from '../firebase';

const App = () => {

  const dispatch = useDispatch();
  const {user: userStore} = useSelector(store => store.user);

  useEffect(() => {

    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      dispatch(userConnect(user));
    }
    
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          dispatch(userConnect({
            id: snapshot.id,
            ...snapshot.data()})
          )
        })
      }
      dispatch(userConnect(null));
    });

    return () => unsubscribeFromAuth();
  },[]);
  
  const PrivateRoute = ({component, path, ...rest}) => {
    if(localStorage.getItem('user')){
      const userStorage = JSON.parse(localStorage.getItem('user'));
      if(userStore){
        if(userStorage.uid === userStore.uid){
          return <Route component={component} path={path} {...rest} />
        }else{
          return <Redirect to='/login'  />
        }
      }else{
        return <Redirect to='/login'  />
      }
    }else{
      return <Redirect to='/login' />
    }
  }

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
          <PrivateRoute exact path='/checkout' component={CheckoutPage} />
          <PrivateRoute excat path='/user/:userName' component={UserPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
