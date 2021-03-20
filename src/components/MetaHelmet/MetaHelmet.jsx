import React from "react";
import { Helmet } from "react-helmet";
import wolf from '../../assets/img/wolf.jpg';

const MetaHelmet = () => (
  <Helmet>
    <title>Wolves Army</title>
    <link rel="canonical" href="https://wolf-ecommerce.firebaseapp.com" />
    <meta property="og:url" content="https://wolf-ecommerce.firebaseapp.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Wolves Army" />
    <meta property="og:title" content="Wolves Army | Awsome Clothes" />
    <meta
      property="og:description"
      content="Wolves Army is an e-commerce web app where everybody can find the best clothes for young people, for any environment, situation and without eliminating comfort"
    />
    <meta property="og:image" content={wolf}/>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@nytimes" />
    <meta name="twitter:creator" content="@SarahMaslinNir" />
    <meta name="twitter:title" content="Wolves Army | Awsome Clothes" />
    <meta
      name="twitter:description"
      content="Wolves Army is an e-commerce web app where everybody can find the best clothes for young people, for any environment, situation and without eliminating comfort"
    />
    <meta
      name="twitter:image"
      content="https://i.pinimg.com/originals/fb/b8/9c/fbb89c55ee4ff86a65d53477e313ffc8.jpg"
    />
  </Helmet>
);

export default MetaHelmet;
