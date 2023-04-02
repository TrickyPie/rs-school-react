import { render } from '@testing-library/react';
import { Radio, RadioBtn, RadioProps } from '../components/UI/radioBtn/Radio';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { vi } from 'vitest';

describe('Radio component', () => {
  const mockRegister = (): UseFormRegisterReturn<string> => ({
    onChange: vi.fn(),
    onBlur: vi.fn(),
    ref: vi.fn(),
    name: 'test-name',
  });

  const props: RadioProps = {
    className: 'test-class',
    legendTitle: 'Choose your favorite',
    name: 'test-name',
    options: [
      { label: 'Matroskin the Cat', value: 'cat1' },
      { label: 'Puss in Boots', value: 'cat2' },
      { label: 'Mrs. Norris', value: 'cat3' },
    ],
    register: mockRegister(),
  };

  it('renders correctly', () => {
    const { getByTestId, getByLabelText } = render(<Radio {...props} />);
    const legendElement = getByTestId('legend-title');
    expect(legendElement).toBeDefined();
    expect(legendElement?.textContent).toBe('Choose your favorite');
    props.options.forEach((option: RadioBtn) => {
      const radio = getByLabelText(option.label) as HTMLInputElement;
      expect(radio.getAttribute('id')).toBe(option.value);
      expect(radio.getAttribute('name')).toBe('test-name');
      expect(radio.getAttribute('value')).toBe(option.label);
      expect(radio.getAttribute('type')).toBe('radio');
    });
  });
});
