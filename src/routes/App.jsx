import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Layout from '../container/Layout';
import LoginPage from '../pages/Login/Login';
import RegisterPage from '../pages/Register/Register';
import Home from '../pages/Home';
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
          <PrivateRoute exact path='/home' component={Home} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/sign-up' component={RegisterPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
