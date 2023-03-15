import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';
import NotFound from './pages/notfound';
import Home from './pages/home';
import { Layout } from './components/layout/layout';

class AppRouter extends React.Component {
  render(): JSX.Element {
    return (
      <Routes>
        <Route path="/" element={<Layout title="Home" content={<Home />} />} />
        <Route path="/about-us" element={<Layout title="About us" content={<About />} />} />
        <Route path="*" element={<Layout title="Page not found" content={<NotFound />} />} />
      </Routes>
    );
  }
}

export default AppRouter;
