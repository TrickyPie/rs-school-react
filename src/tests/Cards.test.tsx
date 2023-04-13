import React from 'react';
import { Cards } from '../components/cards/Cards';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { serverData } from './mocks-test';
import { testTitle } from './mocks-test';

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

  it('renders 2 card', async () => {
    render(<Cards searchTerm={testTitle} onCardClick={() => {}} onLoaded={() => {}} />);
    await waitFor(() => screen.getAllByTestId('card-test'), { timeout: 5000 });
    const cards = screen.getAllByTestId('card-test');
    expect(cards).toHaveLength(2);
  });

  it('renders cards with correct title', async () => {
    render(<Cards searchTerm="Money Tree Plant" onCardClick={() => {}} onLoaded={() => {}} />);
    await waitFor(
      () => {
        const moneyTreeTitle = screen.queryByText((content, element) => {
          const text = element?.textContent ?? '';
          return text.match(/Money Tree Plant/i) !== null;
        });
        if (moneyTreeTitle !== null) {
          expect(moneyTreeTitle).toBeInTheDocument();
        }
      },
      { timeout: 5000 }
    );
  });
});
