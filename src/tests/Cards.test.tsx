import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Cards } from '../components/cards/Cards';
import cardData from '../mock/mock';

describe('Cards', () => {
  it('should render all cards from mock data', () => {
    render(<Cards cardData={cardData} />);
    expect(screen.getAllByTestId('card-test')).toHaveLength(9);
  });
});
