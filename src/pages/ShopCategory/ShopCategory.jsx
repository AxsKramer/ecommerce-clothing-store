import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Collection from "../../components/Collection/Collection";
import Spinner from "../../components/Spinner/Spinner";

import "./ShopCategory.scss";

const ShopCategory = () => {
  const { category } = useParams();
  const collections = useSelector((store) => store.shop.collections);
  const collection = collections.find(collection => collection.routeName === category);
  
  return (
    <section className='shop-category'>
      <h2>{collection.title.toUpperCase()}</h2>
      <div className="items">
        {
          collection.items
            ? collection.items.map(item => <Collection key={item.id} item={item} /> )
            : <Spinner />
        }
      </div>
    </section>
  )
};

export default ShopCategory;
