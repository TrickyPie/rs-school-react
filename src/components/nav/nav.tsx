import React from 'react';
import { NavLink } from 'react-router-dom';

export class Nav extends React.Component {
  private home = 'Home';
  private about = 'About us';

  render() {
    return (
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <NavLink to="/">{this.home}</NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/about-us">{this.about}</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
