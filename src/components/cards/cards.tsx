import { Card, props } from '../../components/card/card';
import React from 'react';
import cardData from '../../mock/mock';

type CardsProps = {
  cardData: props[];
};

export class Cards extends React.Component<CardsProps> {
  render(): JSX.Element {
    const { cardData } = this.props;
    return (
      <>
        {cardData.map((cardProps) => {
          {
            return <Card key={cardProps.id} {...cardProps} />;
          }
        })}
      </>
    );
  }
}
