import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Collection from '../../components/Collection/Collection';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import './Shop.scss';

const Shop = () => {

  const collectionStore = useSelector(store => store.shop)
  const collections = Object.entries(collectionStore);

  return (
    <>
    <section className='shop'>
      {
        collections.length >= 0 ? (
          collections.map((collection) => (
            <div key={collection[0]} className="collection">
              <h2>{collection[0].toUpperCase()}</h2>
              <Link to={`/shop/${collection[0]}`}>See only {collection[0]}</Link>
              <div className="items">
                {collection[1].items.map((item, index) => <Collection key={index + item.id} item={item} />) }
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
