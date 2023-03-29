import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Slider } from '../components/slider/Slider';

describe('Slider', () => {
  const images = [
    './src/assets/images/ficus-lyrata1.jpg',
    './src/assets/images/ficus-lyrata2.jpg',
    './src/assets/images/ficus-lyrata3.jpg',
  ];

  beforeEach(() => {
    render(<Slider image={images} />);
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render two images', () => {
    expect(screen.getAllByTestId('slider-test')).toHaveLength(2);
  });
});
