import React, { FC } from 'react';
import './button.css';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  containerStyle?: object;
  title: string;
}

const Button: FC<Props> = ({ to, containerStyle, title }) => (
  <div className="buttonContainer" style={{ ...containerStyle }}>
    <Link className="button" to={to}>
      {title}
    </Link>
  </div>
);

export default Button;
