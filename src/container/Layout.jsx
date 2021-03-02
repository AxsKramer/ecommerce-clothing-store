import React from 'react';
import Header from '../components/Header/Header';

const Layout = ({children}) => {
  return (
    <>
      {/* <Header user={currentUser}/> */}
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
