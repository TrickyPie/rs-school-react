import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { Card } from './components/card/card';

describe('Card', () => {
  beforeEach(() => {
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
    render(<Card {...props} />);
  });
  it('render the card with right data', () => {
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Description/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Pet-friendly icon/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/Easy-care icon/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Bright/i)).toBeInTheDocument();
    expect(screen.getByText(/Water/i)).toBeInTheDocument();
  });
});
