import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Layout from '../container/Layout';
import LoginPage from '../pages/Login/Login';
import RegisterPage from '../pages/Register/Register';
import HomePage from '../pages/Home/Home';
import ShopPage from '../pages/Shop/Shop';
import ShopCategoryPage from '../pages/ShopCategory/ShopCategory';
import {useSelector} from 'react-redux';

import {auth, createUserProfileDocument} from '../firebase';

const App = () => {

  const {user: userStore} = useSelector(store => store.user);

  const [isAuth, setAuth] = useState({currentUser: null});

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setAuth({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        })
      }
      setAuth({currentUser: userAuth});
    });
    return unsubscribeFromAuth;
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
          <PrivateRoute exact path='/home' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/sign-up' component={RegisterPage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/shop/:category' component={ShopCategoryPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
