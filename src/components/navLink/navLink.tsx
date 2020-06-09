import React, { FC } from 'react';
import './navLink.css';
import { NavLink as NL } from 'react-router-dom';

interface Props {
  route: string;
}

const NavLink: FC<Props> = ({ route }) => (
  <NL
    exact
    className="navLinkContainer center"
    activeClassName="navLinkActiveClass"
    to={route === 'Home' ? '/' : `/${route.toLowerCase()}`}
  >
    {route.toUpperCase()}
  </NL>
);

export default NavLink;
