import React from 'react';
import './app-search-style.css';
import search from '../../assets/png/search.png';

type SearchState = {
  searchValue: string;
};

export class Search extends React.Component {
  public state: SearchState = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  public componentWillUnmount(value?: string): void {
    localStorage.setItem('searchValue', value || this.state.searchValue);
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.componentWillUnmount(event.target.value);
    this.setState({ searchValue: event.target.value });
  };

  public render(): JSX.Element {
    const { searchValue } = this.state;
    return (
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <img className="search-bar__icon" src={search} alt="" />
          <input
            className="search-bar__input"
            type="text"
            value={searchValue}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
