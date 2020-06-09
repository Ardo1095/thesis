import React, { FC } from 'react';
import PageJumbotron from '../../components/pageJumbotron/pageJumbotron';
import ContactForm from './contactForm/contactForm';
import contactImage from '../../assets/contactImage.jpg';
import ContactSection from './contactSection/contactSection';

const ContactPage: FC = () => (
  <>
    <PageJumbotron backgroundImage={contactImage} title="contact us" />
    <ContactForm />
    <ContactSection />
    <div className="map" id="map" />
  </>
);

export default ContactPage;
