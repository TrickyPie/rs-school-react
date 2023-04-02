import { render } from '@testing-library/react';
import { Checkbox, CheckboxData, CheckboxProps } from '../components/UI/checkbox/Checkbox';
import { UseFormRegisterReturn } from 'react-hook-form';
import React from 'react';
import { vi } from 'vitest';

const mockRegister = (): UseFormRegisterReturn<string> => ({
  onChange: vi.fn(),
  onBlur: vi.fn(),
  ref: vi.fn(),
  name: 'test-name',
});

describe('Checkbox component', () => {
  const checkboxData: CheckboxData = {
    id: 'test-checkbox',
    label: 'Yes',
  };

  const props: CheckboxProps = {
    className: 'test-class-name',
    id: 'test-id',
    checkboxData: checkboxData,
    legendTitle: 'Would you like mashed potatoes with sausage?',
    register: mockRegister(),
  };

  it('renders the label and checkbox correctly', () => {
    const { getByTestId } = render(<Checkbox {...props} />);
    const fieldset = getByTestId('checkbox-fieldset');
    const legend = getByTestId('checkbox-legend');
    const input = getByTestId('checkbox-input');
    const label = getByTestId('checkbox-label');

    expect(fieldset).toBeDefined();
    expect(legend.textContent).toBe('Would you like mashed potatoes with sausage?');
    expect(input).toBeDefined();
    expect(label).toBeDefined();
    expect(label.textContent).toBe('Yes');
  });
});
