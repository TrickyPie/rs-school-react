import React from 'react';
import { SearchBar } from '../components/search-bar';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <h2>Home</h2>
        <SearchBar />
      </>
    );
  }
}

export default MainPage;
