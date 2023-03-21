import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/page-about';
import NotFound from './pages/page-notfound';
import Home from './pages/page-home/page-home';
import { Layout } from './components/layout/AppLayout';

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
