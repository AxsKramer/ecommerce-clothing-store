import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Collection from "../../components/Collection/Collection";
import Section from "../../components/Section/Section";

import {getCollectionsFromFirebase} from '../../redux/actions/shopActions';

import "./ShopCategory.scss";

const ShopCategory = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const collections = useSelector(store => store.shop.collections);

  useEffect(() => {
    if(collections.length === 0) {
      dispatch(getCollectionsFromFirebase())
    }else{
      return;
    }
  },[collections])

  const collection = collections.find(collection => collection.routeName === category.toLowerCase());

  return (
    <section className='shop-category'>
      <h2>{collection ? collection.title.toUpperCase() : ''}</h2>
      <div className="items">
        {
          !collection
          ? <Section hasSpinner />
          : collection.items.map(item => <Collection key={item.id} item={item} category={category} /> )
        }
      </div>
    </section>
  )
};

export default ShopCategory;
