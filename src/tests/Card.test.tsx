import { render, screen } from '@testing-library/react';
import { Card } from '../components/card/Card';
import React from 'react';

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

  it('render the card with right data', () => {
    render(<Card {...props} />);
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Description/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Pet-friendly icon/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/Easy-care icon/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Bright/i)).toBeInTheDocument();
    expect(screen.getByText(/Water/i)).toBeInTheDocument();
  });
});
