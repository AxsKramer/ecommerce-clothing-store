import React from "react";
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions/cartActions";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import {addShopItemLike} from '../../redux/actions/shopActions';
import "./Collection.scss";

const Collection = ({ item, category }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const params = useParams();
  const [element, isIntersecting] = useIntersectionObserver({rootMargin: '0px'});

  return (
    <div className="collection-item" ref={element}>
      {isIntersecting && (
        <>
          <div
            className="image"
            itemProp="image"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          ></div>
          <div className="collection-footer" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <div className="details">
              <span className="name" itemProp="description">{item.name}</span>
              <span className="price" itemProp="priceCurrency" content="USD">
                $ <span className="price" itemProp="price" content={item.price}>{item.price}</span>
              </span>
              
            </div>
            <div className="like-add" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              <button title="Like" onClick={() => dispatch(addShopItemLike(item, category ? category : params ))}>
                <i className="fas fa-heart"></i>
                <span itemProp="reviewCount" >{item.likes}</span>
              </button>
              {user ? (
                <button
                  title="Add to cart"
                  onClick={() => dispatch(addItem(item))}
                >
                  <i className="fas fa-cart-plus"></i>
                </button>
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Collection;
