import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import './Home.scss';

const HomePage = () => {

  return (
    <>
      <HeroSection />
      <section className='shipping'>
        <div className='shipping-details'>
          <h2>Free shipping.</h2>
          <p>On orders over $ 100 USD</p>
        </div>
        <i className="fas fa-shipping-fast"></i>
      </section>
      <CategoriesSection />
    </>
  )
}

export default HomePage
