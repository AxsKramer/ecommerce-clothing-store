import React from 'react';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/actions/cartActions';
import './Collection.scss';

const Collection = ({item}) => {

  const dispatch = useDispatch();

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
            <span>1</span>
          </button>
          <button title='Add to cart' onClick={() => dispatch(addItem(item))}>
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Collection
