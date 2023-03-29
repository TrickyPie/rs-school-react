import React from 'react';
import { Header } from '../header/Header';

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
