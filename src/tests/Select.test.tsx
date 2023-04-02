import React from 'react';
import { vi } from 'vitest';
import { getByLabelText, render } from '@testing-library/react';
import { Select, SelectProps } from '../components/UI/select/Select';
import { UseFormRegisterReturn } from 'react-hook-form';

describe('Select component', () => {
  const options = [{ value: 'Penguin 1' }, { value: 'Penguin 2' }, { value: 'Penguin 3' }];
  const mockRegister = (): UseFormRegisterReturn<string> => ({
    onChange: vi.fn(),
    onBlur: vi.fn(),
    ref: vi.fn(),
    name: 'test-name',
  });

  const props: SelectProps = {
    label: 'Super label',
    name: 'test-name',
    options: options,
    register: mockRegister(),
  };

  let selectElement: HTMLSelectElement;

  beforeEach(() => {
    const { container } = render(<Select {...props} />);
    selectElement = getByLabelText(container, 'Super label') as HTMLSelectElement;
  });

  it('renders the select with options correctly', () => {
    expect(selectElement).toBeDefined();
    expect(selectElement.getAttribute('name')).toBe('test-name');
    const optionElements = selectElement.querySelectorAll('option');
    expect(optionElements).toHaveLength(4);
    expect(optionElements[0].textContent).toBe('Select an option');
    expect(optionElements[1].textContent).toBe('Penguin 1');
    expect(optionElements[2].textContent).toBe('Penguin 2');
    expect(optionElements[3].textContent).toBe('Penguin 3');
  });
});
