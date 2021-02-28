import React from 'react';
import Header from '../components/Header/Header';

const Layout = ({children}) => {
  return (
    <>
      {/* <Header user={currentUser}/> */}
      <Header />
      {children}
    </>
  )
}

export default Layout
