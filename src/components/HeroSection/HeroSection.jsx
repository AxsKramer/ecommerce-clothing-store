import React from "react";
import {useHistory} from 'react-router-dom';
import video from '../../assets/video1.mp4';
import CustomButton from '../../components/CustomButton/CustomButton';
import './HeroSection.scss';

const HeroSection = () => {
  const history = useHistory();
  return (
    <section className="hero">
      <video muted autoPlay loop className="hero-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-intro">
        <i className="fab fa-wolf-pack-battalion logo"></i>
        <div className="hero-intro-details">
          <h1>Wolves Army</h1>
          <h3>Clothes for the new age.</h3>
          <span>Dress up, make an impact and show who you are.</span>
          <CustomButton onClick={() => history.push("/categories")}>
            CATEGORIES
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
