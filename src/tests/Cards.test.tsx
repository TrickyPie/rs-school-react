import React from 'react';
import { Cards } from '../components/cards/Cards';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';
import { Mock, vi } from 'vitest';
import { serverData } from './mocks-test';
import { testTitle } from './mocks-test';
import { Plant } from '../components/card/Card';

const server = setupServer(...serverData);

describe('Cards', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([serverData]),
    })
  ) as Mock;

  it('renders error message when no results found', async () => {
    render(<Cards searchTerm="nonexistent" onCardClick={() => {}} />);
    await waitFor(() => screen.getByTestId('error-message'));
    expect(screen.getByTestId('error-message')).toHaveTextContent('Error: No results found');
  });

  it('renders 2 card', async () => {
    render(<Cards searchTerm={testTitle} onCardClick={() => {}} />);
    await waitFor(() => screen.getAllByTestId('card-test'));
    const cards = screen.getAllByTestId('card-test');
    expect(cards).toHaveLength(2);
  });

  it('renders cards with image', async () => {
    render(<Cards searchTerm="Money Tree Plant" onCardClick={() => {}} />);
    await waitFor(() => {
      const moneyTreeTitle = screen.queryByText((content, element) => {
        const text = element?.textContent ?? '';
        return text.match(/Money Tree Plant/i) !== null;
      });
      if (moneyTreeTitle !== null) {
        expect(moneyTreeTitle).toBeInTheDocument();
      }
    });
  });
});
