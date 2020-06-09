import React, { FC } from 'react';
import './stat.css';

const Stat: FC = () => (
  <div className="statContainer">
    <h1 className="statFigure">400</h1>
    <div className="statDivider" />
    <h5 className="statDescription">Satisfied Customers</h5>
  </div>
);

export default Stat;
