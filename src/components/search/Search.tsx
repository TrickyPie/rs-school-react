import React, { useState, useEffect, KeyboardEvent } from 'react';
import './search-style.css';
import search from '../../assets/png/search.png';

type SearchProps = {
  onSearchTermChange: (value: string) => void;
};

const Search: React.FC<SearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    const value = localStorage.getItem('searchValue');
    if (value !== null) {
      setSearchValue(value);
    }
  }, []);

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      localStorage.setItem('searchValue', searchValue);
      props.onSearchTermChange(searchValue);
    }
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <img className="search-bar__icon" src={search} alt="" />
        <input
          className="search-bar__input"
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={handleEnter}
        />
      </div>
    </div>
  );
};

export default Search;
