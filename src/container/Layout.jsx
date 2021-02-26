import React from 'react';
import Header from '../components/Header/Header';

const Layout = ({children, currentUser}) => {
  return (
    <>
      <Header user={currentUser}/>
      {children}
    </>
  )
}

export default Layout
