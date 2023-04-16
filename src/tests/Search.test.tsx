import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { RootState, addSearch } from '../redux/reducer';
import Search from '../components/search/Search';
import { vi } from 'vitest';

const mockStore = configureMockStore<RootState>();

describe('Search component', () => {
  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore({
      root: {
        searchTerm: '',
      },
    });
  });

  it('should render the search bar', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const searchInput = screen.getByRole('searchbox') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
  });

  it('should update search value on change event', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const searchInput = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.value).toBe('test');
  });

  it('should dispatch addSearch action on enter key press', () => {
    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const searchInput = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(addSearch('test'));
  });
});
