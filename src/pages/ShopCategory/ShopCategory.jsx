import React from "react";
import Collection from "../../components/Collection/Collection";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from '../../components/Footer/Footer';
import "./ShopCategory.scss";
import Spinner from "../../components/Spinner/Spinner";

const ShopCategory = () => {
  const { category } = useParams();
  const collectionStore = useSelector((store) => store.shop);
  const [item] = Object.entries(collectionStore).filter(collection => collection[0] === category);
  
  return (
    <>
      <section className='shop-category'>
        <h2>{item[0].toUpperCase()}</h2>
        <div className="items">
          {
            item[1].items 
              ? item[1].items.map(item => <Collection key={item.id} item={item} /> )
              : <Spinner />
          }
        </div>
      </section>
      <Footer />
    </>
  )
};

export default ShopCategory;
