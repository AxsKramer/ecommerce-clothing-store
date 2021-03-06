import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = ({children}) => {
  return (
    <>
      {/* <Header user={currentUser}/> */}
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
