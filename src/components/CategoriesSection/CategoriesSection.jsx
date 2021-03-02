import React from "react";
import { useSelector } from "react-redux";
import Category from "../Category/Category";
import Spinner from "../Spinner/Spinner";
import "./CategoriesSection.scss";

const Categories = () => {
  const { categories } = useSelector((store) => store.categories);

  return (
    <section className='categories-container'>
      <h2>Categories</h2>
      <div className="categories">
        {categories ? (
          categories.map((category) => <Category key={category.id} category={category} />)
        ) : (
          <Spinner />
        )}
      </div>
    </section>
  );
};

export default Categories;
