import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../container/Layout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home';
import {auth, createUserProfileDocument} from '../firebase';

const App = () => {

  const [isAuth, setAuth] = useState({currentUser: null});

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setAuth({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          console.log(isAuth);
        })
      }
      setAuth({currentUser: userAuth});
      
    });
    return () => unsubscribeFromAuth();
  },[]);
  
  console.log(isAuth);

  return (
    <BrowserRouter>
      <Layout currentUser={isAuth.currentUser}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/sign-up' component={Register} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
