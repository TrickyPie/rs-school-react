import React from 'react';
import { NavLink } from 'react-router-dom';
export class Nav extends React.Component {
    home = 'Home';
    about = 'About us';
    render() {
        return (React.createElement("nav", { className: "navigation" },
            React.createElement("ul", { className: "navigation-list" },
                React.createElement("li", { className: "navigation-item" },
                    React.createElement(NavLink, { to: "/" }, this.home)),
                React.createElement("li", { className: "navigation-item" },
                    React.createElement(NavLink, { to: "/about-us" }, this.about)))));
    }
}
