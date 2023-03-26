import { render } from '@testing-library/react';
import { Select } from '../components/UI/select/Select';
import React from 'react';

describe('Select component', () => {
  const options = [{ value: 'Penguin 1' }, { value: 'Penguin 2' }, { value: 'Penguin 3' }];
  const props = {
    label: 'Super label',
    name: 'test-name',
    options: options,
    selectRef: React.createRef<HTMLSelectElement>(),
  };

  it('renders the label correctly', () => {
    const { getByText } = render(<Select {...props} />);
    expect(getByText('Super label')).toBeInTheDocument();
  });

  it('renders the options correctly', () => {
    const { getAllByRole } = render(<Select {...props} />);
    const optionElements = getAllByRole('option');
    expect(optionElements).toHaveLength(4);
    expect(optionElements[0]).toHaveTextContent('Select an option');
    expect(optionElements[1]).toHaveTextContent('Penguin 1');
    expect(optionElements[2]).toHaveTextContent('Penguin 2');
    expect(optionElements[3]).toHaveTextContent('Penguin 3');
  });

  it('uses the ref', () => {
    const { getByLabelText } = render(<Select {...props} />);
    const selectElement = getByLabelText('Super label') as HTMLSelectElement;
    expect(selectElement).toEqual(props.selectRef.current);
  });
});
