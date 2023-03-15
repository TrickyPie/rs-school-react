import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './header';

export class Layout extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <Header />

        <main className="main">
          <Outlet />
        </main>

        <footer className="footer"></footer>
      </>
    );
  }
}
