import React, { FC, useState } from 'react';
import './header.css';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import NavLink from '../navLink/navLink';

const routes = ['Home', 'Order', 'About', 'Contact'];

const Header: FC<any> = ({ history }) => {
  const admin = localStorage.getItem('admin');
  const [fill, setFill] = useState('#000');
  return (
    <div className="headerSection">
      <div className="headerContainer">
        <img style={{ cursor: 'pointer' }} onClick={() => history.push('/')} className="logo" alt="logo" src={logo} />
        <div className="navLinksContainer">
          {routes.map(route => (
            <NavLink key={route} route={route} />
          ))}
        </div>
        <div
          onMouseEnter={() => setFill('#ffd79a')}
          onMouseLeave={() => setFill('#000')}
          style={{ cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center' }}
          onClick={() => history.push(`/${admin ? 'admin' : 'login'}`)}
        >
          <svg
            style={{ transition: 'all ease-in-out 0.25s' }}
            fill={fill}
            width="25pt"
            height="25pt"
            viewBox={admin ? '0 0 128 128' : '0 0 50 50'}
          >
            {admin ? (
              <path d="M 64 27 C 51.3 27 41 37.3 41 50 C 41 62.7 51.3 73 64 73 C 76.7 73 87 62.7 87 50 C 87 37.3 76.7 27 64 27 z M 64 33 C 73.4 33 81 40.6 81 50 C 81 59.4 73.4 67 64 67 C 54.6 67 47 59.4 47 50 C 47 40.6 54.6 33 64 33 z M 64 81 C 47.6 81 32.400781 89.899609 24.300781 104.09961 C 23.500781 105.49961 24 107.39922 25.5 108.19922 C 26 108.49922 26.5 108.59961 27 108.59961 C 28 108.59961 29.099609 108.09961 29.599609 107.09961 C 36.599609 94.699609 49.8 87 64 87 C 78.2 87 91.4 94.699609 98.5 107.09961 C 99.3 108.49961 101.09961 108.99922 102.59961 108.19922 C 103.99961 107.39922 104.49922 105.59961 103.69922 104.09961 C 95.599219 89.899609 80.4 81 64 81 z" />
            ) : (
              <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445312 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445312 48 8 47.554688 8 47 L 8 23 C 8 22.445312 8.445312 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101562 23.898438 40 25 40 C 26.101562 40 27 39.101562 27 38 L 27 35.1875 C 27.601562 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z M 25 30 " />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
