import { Card } from '../components/card/Card';
import React from 'react';
import { render } from '@testing-library/react';

describe('Card', () => {
  const props = {
    id: 1,
    image: ['image1', 'image2'],
    title: 'Title',
    description: 'Description',
    petFriendly: true,
    easyCare: false,
    bright: 'Bright',
    water: 'Water',
  };

  it('renders the card with right data', () => {
    const { getByTestId, queryByTestId } = render(<Card {...props} />);
    expect(getByTestId('title')?.textContent).toBe('Title');
    expect(getByTestId('description')?.textContent).toBe('Description');
    expect(queryByTestId('pet-friendly-icon')).toBeDefined();
    expect(queryByTestId('easy-care-icon')).toBeNull();
    expect(getByTestId('bright')?.textContent).toBe('Bright');
    expect(getByTestId('water')?.textContent).toBe('Water');
  });
});
