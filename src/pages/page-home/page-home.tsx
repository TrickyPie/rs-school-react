import React, { useEffect, useRef, useState } from 'react';
import './page-home-style.css';
import Search from '../../components/search/Search';
import { Cards } from '../../components/cards/Cards';
import PlantModal from '../../components/PlantModal/PlantModal';
import Loader from '../../components/loader/Loader';

const MainPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(localStorage.getItem('searchValue') || '');
  const [clickedCardId, setClickedCardId] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  const handleSearchTermChange = (newSearchTerm: string): void => {
    setSearchTerm(newSearchTerm);
  };

  const handleClick = (id: number): void => {
    setClickedCardId(id);
    setIsModalOpen(true);
  };

  const handleLoaded = () => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  };

  useEffect(() => {
    localStorage.setItem('searchValue', searchTerm);
  }, [searchTerm]);

  return (
    <div className="main-page">
      {showLoader && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
      <div ref={modalRef} className="overlay">
        <Search onSearchTermChange={handleSearchTermChange} />
        <div className="cards-container">
          <Cards searchTerm={searchTerm} onCardClick={handleClick} onLoaded={handleLoaded} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
