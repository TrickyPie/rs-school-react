import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../components/search/Search';
import { vi } from 'vitest';

describe('Search component', () => {
  afterEach(() => localStorage.clear());

  it('renders the search bar', () => {
    render(<Search onSearchTermChange={() => {}} />);
    const searchBar = screen.getByRole('search');
    expect(searchBar).toBeInTheDocument();
  });

  it('stores search value in local storage and calls onSearchTermChange when Enter key is pressed', () => {
    const onSearchTermChange = vi.fn();
    const searchTerm = 'test';

    render(<Search onSearchTermChange={onSearchTermChange} />);
    const searchInput = screen.getByRole('searchbox');
    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    expect(onSearchTermChange).toHaveBeenCalledWith(searchTerm);
    expect(localStorage.getItem('searchValue')).toEqual(searchTerm);
  });

  it('restores search value from local storage and calls onSearchTermChange when component is mounted', () => {
    const onSearchTermChange = vi.fn();
    const searchTerm = 'test';

    localStorage.setItem('searchValue', searchTerm);
    render(<Search onSearchTermChange={onSearchTermChange} />);

    expect(onSearchTermChange).toHaveBeenCalledWith(searchTerm);
    expect(screen.getByRole('searchbox')).toHaveValue(searchTerm);
  });

  it('clears search value from local storage when component is unmounted', () => {
    const onSearchTermChange = vi.fn();
    const searchTerm = 'test';

    const localStorageMock = (() => {
      let store: { [key: string]: string } = {};
      return {
        getItem: (key: string) => store[key],
        setItem: (key: string, value: string) => (store[key] = value),
        clear: () => (store = {}),
      };
    })();

    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    localStorage.setItem('searchValue', searchTerm);

    const { unmount } = render(<Search onSearchTermChange={onSearchTermChange} />);
    expect(localStorage.getItem('searchValue')).toEqual(searchTerm);
    unmount();
    expect(localStorage.getItem('searchValue')).toEqual(searchTerm);
  });
});
