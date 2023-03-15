import React from 'react';

type SearchState = {
  searchValue: string;
};

export class Search extends React.Component {
  public state: SearchState = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  public componentWillUnmount(value?: string) {
    localStorage.setItem('searchValue', value || this.state.searchValue);
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.componentWillUnmount(event.target.value);
    this.setState({ searchValue: event.target.value });
  };

  public render() {
    const { searchValue } = this.state;
    return (
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <i className="search-bar__icon" />
          <input
            className="search-bar__input"
            type="text"
            value={searchValue}
            onChange={this.handleChange}
          />
        </div>
        <button className="search-bar__button">Search</button>
      </div>
    );
  }
}
