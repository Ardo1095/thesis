import React, { CSSProperties, FC } from 'react';
import './icon.css';

interface IconProps {
  icon: any;
  style?: CSSProperties;
  fill: string;
}

const Icon: FC<IconProps> = ({ icon, style, fill }) => (
  <div style={{ ...style }}>
    <svg className="icon" fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      {icon}
    </svg>
  </div>
);

export default Icon;
