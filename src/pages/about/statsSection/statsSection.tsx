import React, { FC } from 'react';
import './statsSection.css';
import Stat from './stat/stat';

const StatsSection: FC = () => (
  <div className="statsContainer">
    <div className="statInnerContainer">
      <Stat />
      <Stat />
    </div>
  </div>
);

export default StatsSection;
