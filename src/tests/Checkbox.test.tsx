import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/UI/checkbox/Checkbox';

import React from 'react';

describe('Checkbox component', () => {
  const checkboxData = {
    id: 'test-checkbox',
    label: 'Yes',
  };

  const checkbox = {
    legendTitle: 'Would you like mashed potatoes with sausage?',
    checkboxRef: React.createRef<HTMLInputElement>(),
    checkboxData: checkboxData,
  };

  it('renders the label and checkbox correctly', () => {
    const { getByTestId } = render(<Checkbox {...checkbox} />);
    expect(getByTestId('checkbox-fieldset')).toBeInTheDocument();
    expect(getByTestId('checkbox-legend')).toHaveTextContent(
      'Would you like mashed potatoes with sausage?'
    );
    expect(getByTestId('checkbox-input')).toBeInTheDocument();
    expect(getByTestId('checkbox-label')).toBeInTheDocument();
    expect(getByTestId('checkbox-label')).toHaveTextContent('Yes');
  });
});
