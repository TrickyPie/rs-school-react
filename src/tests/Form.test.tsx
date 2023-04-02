import { render, getAllByTestId, getByTestId } from '@testing-library/react';
import { CustomForm } from '../components/form/Form';
import React from 'react';

describe('CustomForm', () => {
  it('should render all form elements', () => {
    const { container } = render(<CustomForm callback={() => {}} />);
    const firstNameInput = getByTestId(container, 'firstNameInput');
    const lastNameInput = getByTestId(container, 'lastNameInput');
    const birthdayInput = getByTestId(container, 'birthdayInput');
    const regionSelect = getByTestId(container, 'region');
    const promoCheckbox = getByTestId(container, 'checkbox-input');
    const sunLvlRadios = getAllByTestId(container, 'sunLvlRadio');
    expect(sunLvlRadios.length).toBeGreaterThan(0);
    const firstRadio = sunLvlRadios[0];
    expect(firstRadio).toBeInTheDocument();

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(birthdayInput).toBeInTheDocument();
    expect(regionSelect).toBeInTheDocument();
    expect(promoCheckbox).toBeInTheDocument();
    expect(sunLvlRadios.length).toBeGreaterThan(0);
    expect(firstRadio).toBeInTheDocument();
  });
});
