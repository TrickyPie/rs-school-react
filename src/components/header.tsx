import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
  private home = 'Home';
  private about = 'About us';

  public state = {
    activeNavLink: '',
  };

  private setActive = (): ((props: { isActive: boolean }) => string) => {
    return ({ isActive }): string => {
      return isActive ? 'navigation-link--active' : 'navigation-link';
    };
  };

  private changeState(value?: string): void {
    if (this.state.activeNavLink !== value && (value === this.home || value === this.about)) {
      this.setState({ activeNavLink: value });
    }
  }

  public render(): JSX.Element {
    return (
      <>
        <header className="header">
          <div className="header-content-wrapper">
            <h2 className="header-name">{this.state.activeNavLink}</h2>
            <nav className="navigation">
              <ul className="navigation-list">
                <li className="navigation-item">
                  <NavLink
                    to="/"
                    className={this.setActive()}
                    onClick={() => this.changeState(this.home)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="navigation-item">
                  <NavLink
                    to="/about-us"
                    className={this.setActive()}
                    onClick={() => this.changeState(this.about)}
                  >
                    About us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
