import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import Home from '../../pages/home/home';
import About from '../../pages/about';
import NotFound from '../../pages/notfound';

type props = {
  title: string;
  content: JSX.Element;
};

export class Layout extends React.Component<props> {
  public render(): JSX.Element {
    return (
      <>
        <Header title={this.props.title} />

        <main className="main">{this.props.content}</main>

        <footer className="footer"></footer>
      </>
    );
  }
}
