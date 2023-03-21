import './app-header-style.css';
import React from 'react';
import { Nav } from '../nav/AppNav';

type props = {
  title: string;
};

export class Header extends React.Component<props> {
  public render(): JSX.Element {
    return (
      <>
        <header className="header">
          <div className="header-content-wrapper">
            <h2 className="header-name">{this.props.title}</h2>
            <Nav />
          </div>
        </header>
      </>
    );
  }
}
