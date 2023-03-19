import React from 'react';
import { Search } from '../../components/search/search';
import { Cards } from '../../components/cards/cards';
import './home.css';

class MainPage extends React.Component {
  render(): JSX.Element {
    return (
      <>
        {<Search />}
        <div className="cards-container">{<Cards />}</div>
      </>
    );
  }
}

export default MainPage;
