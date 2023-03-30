import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import MainPage from './pages/page-home/page-home';
import { CustomForm } from './components/form/Form';
import { About } from './pages/page-about';
import { NotFound } from './pages/page-notfound';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout title="Home" content={<MainPage />} />} />
      <Route path="/about-us" element={<Layout title="About us" content={<About />} />} />
      <Route path="/form" element={<Layout title="Form" content={<CustomForm />} />} />
      <Route path="*" element={<Layout title="Page not found" content={<NotFound />} />} />
    </Routes>
  );
};

export default AppRouter;
