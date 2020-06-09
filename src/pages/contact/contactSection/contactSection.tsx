import React, { FC } from 'react';
import './contactSection.css';
import ContactType from './contactType/contactType';

const ContactSection: FC = () => (
  <section className="contactSection">
    <ContactType type="phone">
      <p>+363025664803</p>
    </ContactType>
    <ContactType type="address">
      <p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</p>
    </ContactType>
    <ContactType type="e-mail">
      <p>solomon@yahoo.com</p>
    </ContactType>
  </section>
);

export default ContactSection;
