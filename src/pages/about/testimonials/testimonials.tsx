import React, { FC } from 'react';
import './testimonials.css';
import clientImage from '../../../assets/clientImage.jpg';
import testimonialsData from './testimonials.data';

const renderTestimonial = ({ testimonial, name }: any, index: { toString: () => React.ReactText }) => (
  <div key={index.toString()} className="testimonial">
    <h1 className="testimonialQuote">&ldquo;</h1>
    <p className="testimonialRemark">{testimonial}</p>
    <div className="clientDetailsContainer">
      <div style={{ backgroundImage: `url(${clientImage})` }} className="clientImage" />
      <div className="clientDetails">
        <h6>{name}</h6>
        <p>Client</p>
      </div>
    </div>
  </div>
);

const Testimonials: FC = () => (
  <div className="testimonialSection center">
    <h1>TESTIMONIALS</h1>
    <div className="testimonialContainer">{testimonialsData.map(renderTestimonial)}</div>
  </div>
);

export default Testimonials;
