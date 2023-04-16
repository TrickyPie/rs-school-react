import React from 'react';
import { render } from '@testing-library/react';
import { InputCard } from '../components/InputCard/InputCard';
import FormResult from '../pages/page-form/form-type';
import { vi } from 'vitest';

const mockCard: FormResult = {
  fName: 'Anastasia',
  lName: 'Klimova',
  avatar: {} as FileList,
  avatarUrl: 'http://example.com/avatar.jpg',
  birthday: '01/29/1991',
  region: 'Lisbon',
  promo: true,
  dream: 'To get a dog',
};

describe('InputCard component', () => {
  it('renders the card correctly', () => {
    const handleCardRendered = vi.fn();

    const { getByTestId } = render(
      <InputCard card={mockCard} onRendered={handleCardRendered} ind={0} />
    );

    const cardElement = getByTestId('input-card-0');
    expect(cardElement).toBeDefined();

    const avatarElement = getByTestId('input-card-avatar-0') as HTMLImageElement;
    expect(avatarElement.src).toBe(mockCard.avatarUrl);

    const nameElement = getByTestId('input-card-name-0');
    expect(nameElement?.textContent).toBe(`${mockCard.fName} ${mockCard.lName}`);

    const birthdayElement = getByTestId('input-card-birthday-0');
    expect(birthdayElement?.textContent).toBe(`Birthday: ${mockCard.birthday}`);

    const regionElement = getByTestId('input-card-region-0');
    expect(regionElement?.textContent).toBe(`Region: ${mockCard.region}`);

    const promoElement = getByTestId('input-card-promo-list-0');
    expect(promoElement?.textContent).toContain('You agreed to receive promotional materials.');

    const dreamElement = getByTestId('input-card-sunny-0');
    expect(dreamElement?.textContent).toBe(`Your dream: ${mockCard.dream}`);

    cardElement.click();
    expect(handleCardRendered).toHaveBeenCalledWith(mockCard);
  });
});
