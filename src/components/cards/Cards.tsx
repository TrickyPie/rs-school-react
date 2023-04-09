import { Card, Plant } from '../../components/card/Card';
import React, { useEffect, useState } from 'react';

export const Cards: React.FC<{
  searchTerm: string;
  onCardClick: (id: number) => void;
}> = ({ searchTerm, onCardClick }) => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/TrickyPie/react-api/items/?title_like=${searchTerm}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No results found');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setPlants(data as Plant[]);
        } else {
          throw new Error('Response data is not an array');
        }
      })
      .catch((error: Error) => setError(`Error: ${error.message}`));
  }, [searchTerm]);

  if (error) {
    return <div data-testid="error-message">{error}</div>;
  }

  return (
    <>
      {plants.map((plant: JSX.IntrinsicAttributes & Plant) => (
        <Card
          key={plant.id}
          data-testid={`card-${plant.id}`}
          {...plant}
          onCardClick={() => onCardClick(plant.id)}
        />
      ))}
    </>
  );
};
