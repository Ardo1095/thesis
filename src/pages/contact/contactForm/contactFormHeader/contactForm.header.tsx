import React, { FC } from 'react';
import './contactForm.header.css';
import { Divider } from 'rsuite';

const ContactFormHeader: FC = () => (
  <div className="contactFormHeaderContainer">
    <h2 className="contactFormHeaderHeader">GET IN TOUCH</h2>
    <Divider classPrefix="divider" vertical />
    <p>
      We are available 24/7 by fax, e-mail or by phone. You can also use our quick contact form to ask a question about our
      products.
    </p>
  </div>
);

export default ContactFormHeader;
