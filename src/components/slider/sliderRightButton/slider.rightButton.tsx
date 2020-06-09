import React, { FC } from 'react';
import './slider.rightButton.css';

interface Props {
  position: 'right' | 'left';
  style: object;
  onClick: React.MouseEventHandler;
  onMouseEnter: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
}
const SliderRightButton: FC<Props> = ({ position, style, onClick, onMouseEnter, onMouseLeave }) => (
  <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} onClick={onClick} style={{ ...style }} className="sliderButtonContainer">
    {position === 'right' ? 'next' : 'prev'}
  </div>
);

export default SliderRightButton;
