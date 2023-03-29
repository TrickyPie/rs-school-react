import React from 'react';
import { render } from '@testing-library/react';
import { Input } from '../components/UI/input/Input';

describe('Input component', () => {
  const props = {
    id: 'super-unique-id',
    label: 'Your english level?',
    type: 'text',
    name: 'testInput',
    value: 'Intermediate',
    error: 'You seem to be lying about your level of english, dude >_>',
    reference: React.createRef<HTMLInputElement>(),
  };

  it('renders correctly with props', () => {
    const { queryByText, getByRole } = render(<Input {...props} />);
    expect(queryByText('Your english level?:')).not.toBeNull();
    const input = getByRole('textbox');
    expect(input.getAttribute('id')).toBe('super-unique-id');
    expect(input.getAttribute('type')).toBe('text');
    expect(input.getAttribute('name')).toBe('testInput');
    expect(input.getAttribute('value')).toBe('Intermediate');
    expect(
      queryByText('You seem to be lying about your level of english, dude >_>')
    ).not.toBeNull();
    expect(input).toEqual(props.reference.current);
  });
});
