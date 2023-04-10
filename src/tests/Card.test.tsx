import { Card, CardProps, Plant } from '../components/card/Card';
import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';

describe('Card', () => {
  const plant: Plant = {
    id: 1,
    image: ['https://example.com/image.jpg'],
    title: 'Example Plant',
    petFriendly: true,
    easyCare: false,
  };

  const onCardClick = vi.fn();

  const props: CardProps = {
    ...plant,
    onCardClick,
  };

  it('renders the card with right data', () => {
    const { getByTestId, queryByTestId } = render(<Card {...props} />);
    expect(getByTestId('title')?.textContent).toBe('Example Plant');
    expect(queryByTestId('pet-friendly-icon')).toBeDefined();
    expect(queryByTestId('easy-care-icon')).toBeNull();
  });
});
