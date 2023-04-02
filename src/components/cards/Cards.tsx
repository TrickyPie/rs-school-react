import React from 'react';
import { Card } from '../card/Card';
import cardData from '../../mock/mock';

type CardsProps = {
  cardData: typeof cardData;
};

export const Cards = (props: CardsProps) => {
  const { cardData } = props;
  return (
    <>
      {cardData.map((cardData): JSX.Element => {
        {
          return <Card key={cardData.id} {...cardData} />;
        }
      })}
    </>
  );
};
