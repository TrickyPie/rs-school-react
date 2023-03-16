import './header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

type props = {
  title: string;
};

export class Header extends React.Component<props> {
  private home = 'Home';
  private about = 'About us';

  public state = {
    activeNavLink: '',
  };

  public render(): JSX.Element {
    return (
      <>
        <header className="header">
          <div className="header-content-wrapper">
            <h2 className="header-name">{this.props.title}</h2>
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
          </div>
        </header>
      </>
    );
  }
}
