import React from 'react';
import { Search } from '../../components/search/Search';
import { Cards } from '../../components/cards/Cards';
import cardData from '../../mock/mock';
import './page-home-style.css';

class MainPage extends React.Component {
  render(): JSX.Element {
    return (
      <>
        {<Search />}
        <div className="cards-container">{<Cards cardData={cardData} />}</div>
      </>
    );
  }
}

export default MainPage;
