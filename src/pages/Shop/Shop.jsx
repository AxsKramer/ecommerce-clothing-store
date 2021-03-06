import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import Collection from '../../components/Collection/Collection';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import './Shop.scss';

import {getCollectionsFromFirebase} from '../../redux/actions/shopActions';

const Shop = () => {

  const dispatch = useDispatch();
  const collections = useSelector(store => store.shop.collections);

  useEffect(() => {
    if(collections.length === 0){
      dispatch(getCollectionsFromFirebase());
      return
    }else{
      return
    }
  },[collections]);

  return (
    <>
    <section className='shop'>
      {
        collections.length ? (
          collections.map(collection => (
            <div key={collection.title} className="collection">
              <h2>{collection.title.toUpperCase()}</h2>
              <Link to={`/shop/${collection.title}`}>See only {collection.title}</Link>
              <div className="items">
                {collection.items.map((item, index) => <Collection key={index + item.id} item={item} />) }
              </div>
            </div>
          ))
        ) : <Spinner />
      }
    </section>
    <Footer />
    </>
  )
}

export default Shop
