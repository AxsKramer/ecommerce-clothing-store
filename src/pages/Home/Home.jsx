import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import Networks from '../../components/Networks/Networks';
import Footer from '../../components/Footer/Footer';
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
        <i className="fas fa-shipping-fast car"></i>
        <i className="fas fa-house-user house"></i>
      </section>
      <CategoriesSection />
      <Networks />
      <Footer />
    </>
  )
}

export default HomePage
