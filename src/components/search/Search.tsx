import React, { useEffect, useState } from 'react';
import './search-style.css';
import search from '../../assets/png/search.png';

const Search = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect((): void => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <img className="search-bar__icon" src={search} alt="" />
        <input
          className="search-bar__input"
          type="text"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
