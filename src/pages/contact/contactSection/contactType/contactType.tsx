import React, { FC } from 'react';
import './contactType.css';

interface Props {
  type: string;
}

const ContactType: FC<Props> = ({ children, type }) => (
  <div className="contactTypeContainer">
    <h4>{type}</h4>
    <div className="contactTypeChildrenContainer">{children}</div>
  </div>
);

export default ContactType;
