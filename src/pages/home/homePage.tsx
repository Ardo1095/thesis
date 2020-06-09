import React, { FC } from 'react';
import HomeSlider from './homeSlider/homeSlider';
import './homePage.css';

const HomePage: FC = () => (
  <div className="homeContainer">
    <HomeSlider />
  </div>
);

export default HomePage;
