import { render, screen } from '@testing-library/react';
import { FormPage } from '../pages/page-form/page-form';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('FormPage component', () => {
  it('renders all child components', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );

    const customFormComponent = screen.getByTestId('custom-form');
    const inputCardsComponent = screen.getByTestId('input-cards');

    expect(customFormComponent).toBeInTheDocument();
    expect(inputCardsComponent).toBeInTheDocument();
  });
});
