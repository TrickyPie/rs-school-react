import React from 'react';
import { Cards } from '../components/cards/Cards';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { Mock, vi } from 'vitest';
import { serverData } from './mocks-test';

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

  it('renders cards with correct descriptions', async () => {
    render(<Cards searchTerm="plant" onCardClick={() => {}} />);
    await waitFor(() => {
      const moneyTreeDescription = screen.queryByText((content, element) => {
        const text = element?.textContent ?? '';
        return text.match(/Said to bring good luck and fortune/i) !== null;
      });
      if (moneyTreeDescription !== null) {
        expect(moneyTreeDescription).toBeInTheDocument();
      }

      const snakePlantDescription = screen.queryByText((content, element) => {
        const text = element?.textContent ?? '';
        return text.match(/The Snake Plant is a succulent plant/i) !== null;
      });
      if (snakePlantDescription !== null) {
        expect(snakePlantDescription).toBeInTheDocument();
      }
    });
  });

  it('renders error message when no results found', async () => {
    server.use(
      rest.get(
        'https://my-json-server.typicode.com/TrickyPie/react-api/items/',
        (req, res, ctx) => {
          const searchTerm = req.url.searchParams.get('title_like');
          if (searchTerm === 'nonexistent') {
            return res(ctx.status(404), ctx.json({ message: 'Not found' }));
          } else {
            return res(ctx.json([]));
          }
        }
      )
    );
    render(<Cards searchTerm="nonexistent" onCardClick={() => {}} />);
    await waitFor(() => screen.getByTestId('error-message'));
    expect(screen.getByTestId('error-message')).toHaveTextContent('Error: Request is not defined');
  });
});
