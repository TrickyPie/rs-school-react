import React, { useEffect, useState } from 'react';
import './page-home-style.css';
import Search from '../../components/search/Search';
import { Cards } from '../../components/cards/Cards';
import { Plant } from '../../components/card/Card';

const MainPage: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect((): void => {
    fetch('https://my-json-server.typicode.com/TrickyPie/react-api/items')
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, [plants]);

  const handleSearchTermChange = (value: string): void => {
    setSearchTerm(value);
    console.log(value);
  };

  return (
    <>
      <Search onSearchTermChange={handleSearchTermChange} />
      <div className="cards-container">
        <Cards plants={plants} searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default MainPage;
