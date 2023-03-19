import React from 'react';
import { Header } from '../header/header';
export class Layout extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, { title: this.props.title }),
            React.createElement("main", { className: "main" }, this.props.content),
            React.createElement("footer", { className: "footer" })));
    }
}
