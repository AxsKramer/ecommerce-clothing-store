import React, {lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';
import Section from '../components/Section/Section';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

const LoginPage = lazy(() => import('../pages/Login/Login'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const HomePage = lazy(() => import('../pages/Home/Home'));
const ShopPage = lazy(() => import('../pages/Shop/Shop'));
const ShopCategoryPage = lazy(() => import('../pages/ShopCategory/ShopCategory'));
const CheckoutPage = lazy(() => import('../pages/Checkout/Checkout'));
const CategoriesPage = lazy(() => import('../pages/Categories/Categories'));
const UserPage = lazy(() => import('../pages/User/User'));
const PrivateRoute = lazy(() => import('../components/PrivateRoute/PrivateRoute'));

const Routes = () => {
  
  return (
    <ErrorBoundary>
      <Suspense fallback={<Section hasSpinner />}>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/sign-up' component={RegisterPage} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/:category' component={ShopCategoryPage} />
        <Route exact path='/categories' component={CategoriesPage} />
        <PrivateRoute item='user' exact path='/checkout' component={CheckoutPage} />
        <PrivateRoute item='user' excat path='/user/:userName' component={UserPage} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Routes;
