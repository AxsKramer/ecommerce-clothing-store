import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../container/Layout';
import Login from '../pages/Login/Login';
import Home from '../pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/' component={} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
