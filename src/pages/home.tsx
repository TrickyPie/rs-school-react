import { Card } from '../components/card/card';
import React from 'react';
import { Search } from '../components/search/search';
import cardData from '../mock/mock';

class MainPage extends React.Component {
  render(): JSX.Element {
    return (
      <>
        {<Search />}
        {cardData.map((cardProps) => {
          {
            return <Card key={cardProps.id} {...cardProps} />;
          }
        })}
      </>
    );
  }
}

export default MainPage;
