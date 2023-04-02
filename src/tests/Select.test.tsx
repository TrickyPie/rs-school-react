import React from 'react';
import { vi } from 'vitest';
import { fireEvent, getByLabelText, render } from '@testing-library/react';
import { Select, SelectProps } from '../components/UI/select/Select';
import { useForm, UseFormRegisterReturn } from 'react-hook-form';

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
    selectElement = getByLabelText(container, 'Super label');
  });

  it('renders the select with options correctly', () => {
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.getAttribute('name')).toBe('test-name');
    const optionElements = selectElement.querySelectorAll('option');
    expect(optionElements).toHaveLength(4);
    expect(optionElements[0]).toHaveTextContent('Select an option');
    expect(optionElements[1]).toHaveTextContent('Penguin 1');
    expect(optionElements[2]).toHaveTextContent('Penguin 2');
    expect(optionElements[3]).toHaveTextContent('Penguin 3');
  });
});
