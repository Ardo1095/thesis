import React, { FC } from 'react';
import ContactFormHeader from './contactFormHeader/contactForm.header';
import './contactForm.css';
import Input from '../../../components/input/input';
import ActionButton from '../../../components/actionButton/actionButton';

const ContactForm: FC = () => {
  return (
    <div className="contactFormContainer">
      <ContactFormHeader />

      <form datatype="contact" className="formContainer">
        <Input required name="name" placeholder="Name" onChange={(event: any): void => console.log(event)} />
        <Input required name="email" placeholder="Email" onChange={(event: any): void => console.log(event)} />
        <Input required name="phone" placeholder="Phone" onChange={(event: any): void => console.log(event)} />
        <textarea className="contactTextArea" placeholder="Message" cols={20} rows={5} />
        <hr />
        <ActionButton containerStyle={{ marginTop: 30 }} action="send message" onClick={() => alert('submit')} />
      </form>
    </div>
  );
};

export default ContactForm;
