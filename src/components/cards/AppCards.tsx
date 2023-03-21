import { Card, props } from '../card/AppCard';
import React from 'react';
import cardData from '../../mock/mock';

type CardsProps = {
  cardData: typeof cardData;
};

export class Cards extends React.Component<CardsProps> {
  render(): JSX.Element {
    const { cardData } = this.props;
    return (
      <>
        {cardData.map((cardProps: props): JSX.Element => {
          {
            return <Card key={cardProps.id} {...cardProps} />;
          }
        })}
      </>
    );
  }
}
