import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component, path, item, ...rest}) => {
  const {user: userStore} = useSelector(store => store.user);
  if(localStorage.getItem(item)){
    const userStorage = JSON.parse(localStorage.getItem(item));
    if(userStore){
      if(userStorage.uid === userStore.uid){
        return <Route component={component} path={path} {...rest} />
      }else{
        return <Redirect to='/login'  />
      }
    }else{
      return <Redirect to='/login' />
    }
  }else{
    return <Redirect to='/' />
  }
}

export default PrivateRoute;