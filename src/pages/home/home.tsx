import { Card } from '../../components/card/card';
import React from 'react';
import { Search } from '../../components/search/search';
import cardData from '../../mock/mock';
import './home.css';

class MainPage extends React.Component {
  render(): JSX.Element {
    return (
      <>
        {<Search />}
        <div className="cards-container">
          {cardData.map((cardProps) => {
            {
              return <Card key={cardProps.id} {...cardProps} />;
            }
          })}
        </div>
      </>
    );
  }
}

export default MainPage;
