import React from 'react';
import Category from '../Category/Category';
import './CategoriesSection.scss';

const Categories = ({categories}) => {
  return (
    <section>
      <h2>Categories</h2>
      <div className='homepage'>
        <div className="directory-menu">
          {
            categories.map(category => <Category key={category.id} category={category} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Categories;
