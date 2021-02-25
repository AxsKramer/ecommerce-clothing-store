import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../container/Layout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home';
import {auth} from '../firebase';

const App = () => {

  const [isAuth, setAuth] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => setAuth({currentUser: user}));
    
    return () => unsubscribeFromAuth();
  },[]);
  
  console.log(isAuth);

  return (
    <BrowserRouter>
      <Layout>
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
