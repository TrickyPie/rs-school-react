import React from 'react';
import { setupServer } from 'msw/node';
import { findByTestId, render } from '@testing-library/react';
import { vi } from 'vitest';
import PlantModal from '../components/PlantModal/PlantModal';
import { serverData } from './mocks-test';
import { testId } from './mocks-test';

const server = setupServer(...serverData);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('PlantModal', () => {
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
