import { Card, props } from '../../components/card/Card';
import React, { useEffect, useState } from 'react';
// import { Card } from '../card/Card';
/* import cardData from '../../mock/mock'; */

/* type CardsProps = {
  cardData: typeof cardData;
}; */

export const Cards = (/* : CardsProps */) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/TrickyPie/react-api/items')
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        console.log(data, plants);
      })
      .catch((error) => console.log(error));
  }, [plants]);

  /*  const { cardData } = props; */
  return (
    <>
      {plants.map((plant: JSX.IntrinsicAttributes & props): JSX.Element => {
        {
          return <Card key={plant.id} {...plant} />;
        }
      })}
    </>
  );
};
