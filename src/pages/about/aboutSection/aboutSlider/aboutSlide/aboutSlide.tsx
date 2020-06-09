import React, { FC } from 'react';
import './aboutSlide.css';

interface Props {
  backgroundImage: any;
}

const AboutSlide: FC<Props> = ({ backgroundImage }) => (
  <div className="aboutSlideContainer" style={{ backgroundImage: `url(${backgroundImage})` }} />
);

export default AboutSlide;
