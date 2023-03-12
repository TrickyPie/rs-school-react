import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export class Layout extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <nav className="navigation">
            <ul className="navigation-list">
              <li className="navigation-item">
                <Link to="/">Home</Link>
              </li>
              <li className="navigation-item">
                <Link to="/about-us">About us</Link>
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
