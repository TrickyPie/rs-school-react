import React from 'react';
import './header-style.css';
import { Nav } from '../nav/Nav';

type props = {
  title: string;
};

export const Header = (props: props) => {
  return (
    <>
      <header className="header">
        <div className="header-content-wrapper">
          <h2 className="header-name">{props.title}</h2>
          <Nav />
        </div>
      </header>
    </>
  );
};
