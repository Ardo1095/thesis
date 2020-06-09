import React, { FC, useState } from 'react';
import './sidebar.item.css';
import { Link } from 'react-router-dom';

interface SidebarProps {
  routeName: any;
  route: any;
  onClick?: any;
}

const SidebarItem: FC<SidebarProps> = ({ routeName, route, onClick }) => {
  const [fillColor, setFillColor] = useState('#000000');
  const toggleFillColor = (): void => {
    setFillColor(fillColor === '#000000' ? '#ffd79a' : '#000000');
  };
  return (
    <Link onClick={onClick} onMouseEnter={toggleFillColor} onMouseLeave={toggleFillColor} to={route} className="sidebarItemContainer">
      {routeName}
    </Link>
  );
};

export default SidebarItem;
