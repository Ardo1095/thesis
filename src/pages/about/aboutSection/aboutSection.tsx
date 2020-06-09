import React, { FC } from 'react';
import './aboutSection.css';
import { Row, Col } from 'antd';
import AboutSlider from './aboutSlider/aboutSlider';
import AboutText from './aboutText/aboutText';

const evenColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

const AboutSection: FC = () => (
  <section className="aboutSectionContainer">
    <Row style={{ alignItems: 'center' }} type="flex">
      <Col {...evenColResponsiveProps}>
        <AboutText />
      </Col>
      <Col {...evenColResponsiveProps}>
        <AboutSlider />
      </Col>
    </Row>
  </section>
);

export default AboutSection;
