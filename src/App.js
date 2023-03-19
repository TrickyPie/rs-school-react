import React from 'react';
import AppRouter from './router';
class App extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(AppRouter, null)));
    }
}
export default App;
