import React from 'react';
import { Header } from '../header/Header';

type props = {
  title: string;
  content: JSX.Element;
};

export const Layout = (props: props) => {
  return (
    <>
      <Header title={props.title} />

      <main className="main">{props.content}</main>

      <footer className="footer"></footer>
    </>
  );
};
