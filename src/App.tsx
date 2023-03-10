import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './router';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
