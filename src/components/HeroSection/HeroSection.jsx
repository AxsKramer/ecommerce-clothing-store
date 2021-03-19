import React from "react";
import {useHistory} from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import Slides from '../SlideHero/SlideHero';
import './HeroSection.scss';

const images = [
  {
    src: 'https://cdn.pixabay.com/photo/2016/03/09/09/31/woman-1245840__340.jpg',
    title: 'In Autumn'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/01/19/18/04/man-1150058_960_720.jpg',
    title: 'In the woods'
  },
  {
    src: 'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'In the city'
  },
  {
    src: 'https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'On a trip'
  },
  {
    src: "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401__340.jpg",
    title: 'In Winter'
  }
]

const HeroSection = () => {
  
  const history = useHistory();
  return (
    <section className="hero">
      <figure className='image-container'>
      <Slides
        interval={4000}
        images={images}
      />
      </figure>
      <div className="hero-intro">
        <div className="hero-intro-details">
          <div>
            <i className="fab fa-wolf-pack-battalion logo"></i>
          </div>
          <h1>Wolves Army</h1>
          <h3>Clothes for every place you want to go</h3>
          <span>Dress up, make an impact and show who you are.</span>
          <CustomButton onClick={() => history.push("/shop")}>
            SEE COLLECTIONS
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
