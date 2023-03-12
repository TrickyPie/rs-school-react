import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

export class Layout extends React.Component {
  private setActive(): (props: { isActive: boolean }) => string {
    return ({ isActive }): string => {
      return isActive ? 'navigation-link--active' : 'navigation-link';
    };
  }

  public render(): JSX.Element {
    return (
      <>
        <header className="header">
          <nav className="navigation">
            <ul className="navigation-list">
              <li className="navigation-item">
                <NavLink to="/" className={this.setActive()}>
                  Home
                </NavLink>
              </li>
              <li className="navigation-item">
                <NavLink to="/about-us" className={this.setActive()}>
                  About us
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main">
          <Outlet />
        </main>

        <footer className="footer"></footer>
      </>
    );
  }
}
