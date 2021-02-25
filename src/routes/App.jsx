import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../container/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          {/* <Route exact path='/' component={} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
