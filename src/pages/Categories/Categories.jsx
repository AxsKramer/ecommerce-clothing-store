import React from 'react';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import Footer from '../../components/Footer/Footer';
import './Categories.scss';

const CategoriesPage = () => {
  return (
    <section className='categoriesPage'>
      <CategoriesSection />
      <Footer />
    </section>
  )
}

export default CategoriesPage
