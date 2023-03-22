import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from './components/card/Card';
import { Slider } from './components/slider/Slider';
import { Cards } from './components/cards/Cards';
import cardData from './mock/mock';

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

describe('Slider', () => {
  const images = [
    './src/assets/images/ficus-lyrata1.jpg',
    './src/assets/images/ficus-lyrata2.jpg',
    './src/assets/images/ficus-lyrata3.jpg',
  ];

  beforeEach(() => {
    const { container } = render(<Slider image={images} />);
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render two images', () => {
    expect(screen.getAllByTestId('slider-test')).toHaveLength(2);
  });
});

describe('Cards', () => {
  it('should render all cards from mock data', () => {
    const { container } = render(<Cards cardData={cardData} />);
    expect(screen.getAllByTestId('card-test')).toHaveLength(9);
  });
});
