import React, { useEffect, useRef, useState } from 'react';
import './page-home-style.css';
import Search from '../../components/search/Search';
import { Cards } from '../../components/cards/Cards';
import PlantModal from '../../components/PlantModal/PlantModal';

const MainPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(localStorage.getItem('searchValue') || '');
  const [clickedCardId, setClickedCardId] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearchTermChange = (newSearchTerm: string): void => {
    setSearchTerm(newSearchTerm);
  };

  const handleClick = (id: number): void => {
    setClickedCardId(id);
    setIsModalOpen(true);
  };

  useEffect(() => {
    localStorage.setItem('searchValue', searchTerm);
  }, [searchTerm]);

  return (
    <div ref={modalRef} className="overlay">
      <Search onSearchTermChange={handleSearchTermChange} />
      <div className="cards-container">
        <Cards searchTerm={searchTerm} onCardClick={handleClick} />
      </div>
      {isModalOpen && clickedCardId && (
        <PlantModal id={clickedCardId} parent={modalRef.current} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default MainPage;
