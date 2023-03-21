import React from 'react';
import { Search } from '../../components/search/AppSearch';
import { Cards } from '../../components/cards/AppCards';
import cardData from '../../mock/mock';
import './home.css';

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
