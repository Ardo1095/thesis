import React, { FC } from 'react';
import PageJumbotron from '../../components/pageJumbotron/pageJumbotron';
import aboutUsImage from '../../assets/aboutUsImage.jpg';
import AboutSection from './aboutSection/aboutSection';
import StatsSection from './statsSection/statsSection';
import Testimonials from './testimonials/testimonials';

const AboutPage: FC = () => (
  <>
    <PageJumbotron
      subTitle="We are industry-leading organic farm delivering the best products
that boost your daily life energy and potential."
      backgroundImage={aboutUsImage}
      title="About us"
    />
    <AboutSection />
    <StatsSection />
    <Testimonials />
  </>
);

export default AboutPage;
