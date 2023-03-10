import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/about';
import NotFound from './pages/notfound';
import Home from './pages/home';

class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default AppRouter;
