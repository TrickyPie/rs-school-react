import React, { useState } from 'react';
import './page-home-style.css';
import Search from '../../components/search/Search';
import { Cards } from '../../components/cards/Cards';
/* import cardData from '../../mock/mock';
 */
const MainPage: React.FC = () => {
  return (
    <>
      <Search />
      <div className="cards-container">
        <Cards /* cardData={cardData} */ />
      </div>
    </>
  );
};

export default MainPage;
