import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';
import NotFound from './pages/notfound';
import Home from './pages/home/home';
import { Layout } from './components/layout/layout';
class AppRouter extends React.Component {
    render() {
        return (React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Layout, { title: "Home", content: React.createElement(Home, null) }) }),
            React.createElement(Route, { path: "/about-us", element: React.createElement(Layout, { title: "About us", content: React.createElement(About, null) }) }),
            React.createElement(Route, { path: "*", element: React.createElement(Layout, { title: "Page not found", content: React.createElement(NotFound, null) }) })));
    }
}
export default AppRouter;
