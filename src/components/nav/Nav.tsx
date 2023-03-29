import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationLinks } from './nav-type';

export const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <NavLink to="/">{NavigationLinks.HOME}</NavLink>
        </li>
        <li className="navigation-item">
          <NavLink to="/about-us">{NavigationLinks.ABOUT}</NavLink>
        </li>
        <li className="navigation-item">
          <NavLink to="/form">{NavigationLinks.FORM}</NavLink>
        </li>
      </ul>
    </nav>
  );
};
