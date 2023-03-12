import { Layout } from './components/layout';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRouter from './router';

class App extends React.Component {
  render() {
    return (
      <>
        <AppRouter />
      </>
    );
  }
}

export default App;
