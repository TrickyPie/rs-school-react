import React from 'react';
import { Cards } from '../components/cards/Cards';
import { setupServer } from 'msw/node';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { Mock, vi } from 'vitest';
import { serverData } from './mocks-test';
import PlantModal from '../components/PlantModal/PlantModal';

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

  test('displays plant modal with correct data', async () => {
    const setIsModalOpen = vi.fn();
    render(<PlantModal id={1} parent={document.body} setIsModalOpen={setIsModalOpen} />);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });

    expect(screen.getByTestId('plant-title')).toBeInTheDocument();

    expect(
      screen.getByText(
        'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk.'
      )
    ).toBeInTheDocument();

    expect(screen.getByTitle('Pet friendly')).toBeInTheDocument();
    expect(screen.getByTitle('Easy care')).toBeInTheDocument();

    expect(screen.getByText('Thrives in bright indirect to medium light.')).toBeInTheDocument();

    expect(
      screen.getByText(
        'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.'
      )
    ).toBeInTheDocument();
  });

  /* test('displays plant modal with correct data', async () => {
    const setIsModalOpen = vi.fn();
    render(<PlantModal id={1} parent={document.body} setIsModalOpen={setIsModalOpen} />);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });

    expect(screen.getByTestId('plant-title')).toBeInTheDocument();

    expect(
      screen.getByText(
        'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk.'
      )
    ).toBeInTheDocument();

    expect(screen.getByTitle('Pet friendly')).toBeInTheDocument();
    expect(screen.getByTitle('Easy care')).toBeInTheDocument();

    expect(screen.getByText('Thrives in bright indirect to medium light.')).toBeInTheDocument();

    expect(
      screen.getByText(
        'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.'
      )
    ).toBeInTheDocument();
  });
 */
  /* test('clicking close button calls setIsModalOpen', async () => {
    const setIsModalOpen = vi.fn();
    render(<PlantModal id={1} parent={document.body} setIsModalOpen={setIsModalOpen} />);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    });

    fireEvent.click(screen.getByTestId('close-button'));

    expect(setIsModalOpen).toHaveBeenCalledWith(false);
  }); */
});
