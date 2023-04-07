import { Card, Plant } from '../../components/card/Card';
import React, { FC, useEffect, useState } from 'react';
import MainPage from '../../pages/page-home/page-home';

export const Cards: React.FC<{
  searchTerm: string;
  onCardClick: (id: number) => void;
}> = ({ searchTerm, onCardClick }) => {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect((): void => {
    fetch(`https://my-json-server.typicode.com/TrickyPie/react-api/items/?title_like=${searchTerm}`)
      .then((response: Response): Promise<Plant[]> => response.json())
      .then((data: Plant[]): void => {
        setPlants(data);
        console.log(data);
      })
      .catch((error: Error): void => console.log(`Error: ${error}`));
  }, [searchTerm]);

  return (
    <>
      {plants.map((plant: JSX.IntrinsicAttributes & Plant): JSX.Element => {
        {
          return <Card key={plant.id} {...plant} onCardClick={() => onCardClick(plant.id)} />;
        }
      })}
    </>
  );
};
