import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/about';
import NotFound from './pages/notfound';
import Home from './pages/home';
import { Layout } from './components/layout';

class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}

export default AppRouter;
