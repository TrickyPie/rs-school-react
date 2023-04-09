import React from 'react';
import { Cards } from '../components/cards/Cards';
import { setupServer } from 'msw/node';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { Mock, vi } from 'vitest';
import PlantModal from '../components/PlantModal/PlantModal';
import { serverData } from './mocks-test';
import { testId } from './mocks-test';

const server = setupServer(...serverData);

describe('PlantModal', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([serverData]),
    })
  ) as Mock;

  it('displays plant modal with correct title', async () => {
    const setIsModalOpen = vi.fn();
    render(<PlantModal id={testId} parent={document.body} setIsModalOpen={setIsModalOpen} />);
    const titleElement = await screen.findByTestId('plant-title');
    expect(titleElement).toHaveTextContent('Money Tree Plant');
    expect(await screen.findByText(/Said to bring good luck and fortune/i)).toBeInTheDocument();
  });
});
