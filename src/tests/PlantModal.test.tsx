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
    setTimeout(() => {
      expect(title).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(title.textContent).toEqual('Money Tree Plant');
      expect(description.textContent).toEqual(
        'Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk.'
      );
    }, 2000);
  });

  it('closes the plant modal when the close button is clicked', async () => {
    const setIsModalOpen = vi.fn();
    render(<PlantModal id={testId} setIsModalOpen={setIsModalOpen} parent={document.body} />);
    const closeButton = await findByTestId(document.body, 'close-button');
    fireEvent.click(closeButton);
    setTimeout(() => {
      expect(closeButton).not.toBeInTheDocument();
    }, 2000);
  });

  it('does not render if parent is null', () => {
    const setIsModalOpen = vi.fn();
    const { container } = render(
      <PlantModal id={testId} setIsModalOpen={setIsModalOpen} parent={null} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders the plant modal correctly if plant is not pet-friendly and not easy to care for', async () => {
    const setIsModalOpen = vi.fn();
    render(<PlantModal id="3" setIsModalOpen={setIsModalOpen} parent={document.body} />);
    const title = await findByTestId(document.body, 'plant-title');
    const description = await findByTestId(document.body, 'plant-description');
    const petFriendlyIcon = document.querySelector('.modal-overlay-pet-friendly');
    const easyCareIcon = document.querySelector('.modal-overlay-care');
    setTimeout(() => {
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(title.textContent).toEqual('Monstera');
      expect(description.textContent).toEqual(
        'The Monstera is a very popular indoor plant due to its unique foliage! It loves bright, indirect light, and can grow quite large if given the space. Its leaves have natural holes called fenestrations, which make it a favorite among plant enthusiasts.'
      );
      expect(petFriendlyIcon).not.toBeInTheDocument();
      expect(easyCareIcon).not.toBeInTheDocument();
    }, 2000);
  });
});
