import { render, screen, getAllByTestId, fireEvent } from '@testing-library/react';
import { CustomForm } from '../components/form/Form';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('CustomForm', () => {
  it('renders form with all inputs and submit button', () => {
    render(
      <Provider store={store}>
        <CustomForm />
      </Provider>
    );

    expect(screen.getByTestId('custom-form')).toBeInTheDocument();
    expect(screen.getByTestId('firstNameInput')).toBeInTheDocument();
    expect(screen.getByTestId('lastNameInput')).toBeInTheDocument();
    expect(screen.getByTestId('avatarInput')).toBeInTheDocument();
    expect(screen.getByTestId('birthdayInput')).toBeInTheDocument();
    expect(screen.getByTestId('region')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-input')).toBeInTheDocument();
    const sunLvlRadios = getAllByTestId(document.body, 'sunLvlRadio');
    expect(sunLvlRadios.length).toBe(3);
    expect(sunLvlRadios[0]).toBeInTheDocument();
    expect(screen.getByTestId('submitButton')).toBeInTheDocument();
  });

  it('displays error message if required fields are not filled out', async () => {
    render(
      <Provider store={store}>
        <CustomForm />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('submitButton'));

    expect(await screen.findByTestId('firstNameError')).toHaveTextContent(
      'Name must contain at least 3 characters and be on english'
    );
    expect(await screen.findByTestId('lastNameError')).toHaveTextContent(
      'Name must contain at least 3 characters and be on english'
    );
    expect(await screen.findByTestId('avatarError')).toHaveTextContent('Avatar is required');
    expect(await screen.findByTestId('birthdayError')).toHaveTextContent('Birthday is required');
    expect(await screen.findByTestId('regionError')).toHaveTextContent('Region is required');
    expect(await screen.findByTestId('promoError')).toHaveTextContent('This field is required.');
    expect(await screen.findByTestId('dreamError')).toHaveTextContent('This field is required.');
  });
});
