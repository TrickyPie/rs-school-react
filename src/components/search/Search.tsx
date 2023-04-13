import React, { useState, KeyboardEvent } from 'react';
import './search-style.css';
import search from '../../assets/png/search.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { addSearch } from '../../redux/actions';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.searchTerm);
  const [searchValue, setSearchValue] = useState(searchTerm);

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      dispatch(addSearch(searchValue));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <img className="search-bar__icon" src={search} alt="" role="search" />
        <input
          className="search-bar__input"
          type="search"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      </div>
    </div>
  );
};

export default Search;
