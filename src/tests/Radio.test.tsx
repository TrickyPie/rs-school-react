import { render } from '@testing-library/react';
import Radio from '../components/UI/radioBtn/Radio';
import React from 'react';

describe('Radio component', () => {
  const props = {
    className: 'test-class',
    legendTitle: 'Choose your favorite',
    name: 'test-name',
    options: [
      { label: 'Matroskin the Cat', value: 'cat1' },
      { label: 'Puss in Boots', value: 'cat2' },
      { label: 'Mrs. Norris', value: 'cat3' },
    ],
    radioRefs: [
      React.createRef<HTMLInputElement>(),
      React.createRef<HTMLInputElement>(),
      React.createRef<HTMLInputElement>(),
    ],
  };

  it('renders correctly', () => {
    const { getByTestId, getByLabelText } = render(<Radio {...props} />);
    expect(getByTestId('legend')).toHaveTextContent('Choose your favorite');
    props.options.forEach((option, index: number) => {
      const radio = getByLabelText(option.label);
      expect(radio.getAttribute('id')).toBe(option.value);
      expect(radio.getAttribute('name')).toBe('test-name');
      expect(radio.getAttribute('value')).toBe(option.label);
      expect(radio.getAttribute('type')).toBe('radio');
      expect(radio).toEqual(props.radioRefs[index].current);
    });
  });
});
