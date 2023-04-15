import React from 'react';
import './page-home-style.css';
import Search from '../../components/search/Search';
import { Cards } from '../../components/cards/Cards';
import PlantModal from '../../components/PlantModal/PlantModal';

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <div className="overlay">
        <Search />
        <div className="cards-container">
          <Cards />
        </div>
      </div>
      <PlantModal />
    </div>
  );
};
