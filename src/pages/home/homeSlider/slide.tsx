import React, { FC } from 'react';
import { Fade, Zoom } from 'react-reveal';
import Button from '../../../components/button/button';

interface SlideProps {
  backgroundImage: any;
}

const Slide: FC<SlideProps> = ({ backgroundImage, children }) => (
  <div style={{ backgroundImage: `url(${backgroundImage})` }} className="slideContainer center">
    <div className="fullHeight center">{children}</div>
  </div>
);

export default Slide;
