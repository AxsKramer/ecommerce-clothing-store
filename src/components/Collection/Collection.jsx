import React from 'react';
import './Collection.scss';

const Collection = ({item}) => {

  return (
    <div className='collection-item'>
      <div className="image" style={{backgroundImage: `url(${item.imageUrl})`}}></div>
      <div className="collection-footer">
        <div className='details'>
          <span className="name">{item.name}</span>
          <span className="price">$ {item.price}</span>
        </div>
        <div className='like-add'>
          <button title='Like'>
            <i className="fas fa-heart"></i>
            <span>55</span>
          </button>
          <button title='Add to cart'>
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Collection
