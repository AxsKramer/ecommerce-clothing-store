import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import Networks from "../../components/Networks/Networks";
import Shipping from "../../components/Shipping/Shipping";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Shipping />
      <CategoriesSection />
      <Networks />
    </>
  );
};

export default HomePage;
