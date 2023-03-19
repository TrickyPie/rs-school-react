import './header.css';
import React from 'react';
import { Nav } from '../nav/nav';
export class Header extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("header", { className: "header" },
                React.createElement("div", { className: "header-content-wrapper" },
                    React.createElement("h2", { className: "header-name" }, this.props.title),
                    React.createElement(Nav, null)))));
    }
}
