import React from 'react';
import { setupServer } from 'msw/node';
import { findByTestId, fireEvent, render, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import PlantModal from '../components/PlantModal/PlantModal';
import { serverData } from './mocks-test';
import { testId } from './mocks-test';

const server = setupServer(...serverData);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('PlantModal', () => {
  it('renders the plant modal right', async () => {
    const setIsModalOpen = vi.fn();
    render(<PlantModal id={testId} setIsModalOpen={setIsModalOpen} parent={document.body} />);

    const title = await findByTestId(document.body, 'plant-title');
    const description = await findByTestId(document.body, 'plant-description');
    const closeButton = await findByTestId(document.body, 'close-button');

    await waitFor(() => {
      expect(title).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
