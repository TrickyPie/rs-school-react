import React from 'react';
import { render } from '@testing-library/react';
import { InputCard } from '../components/InputCard/InputCard';

const mockRes = [
  {
    fName: 'Anastasia',
    lName: 'Klimova',
    avatar: {} as FileList,
    updatedAvatar: 'http://example.com/avatar.jpg',
    birthday: '01/29/1991',
    region: 'Lisbon',
    promo: true,
    dream: 'To get a dog',
  },
];

describe('InputCard component', () => {
  it('renders the card correctly', () => {
    const { getByTestId } = render(<InputCard res={mockRes} />);
    const cardElement = getByTestId('input-card-0');
    expect(cardElement).toBeDefined();

    const avatarElement = getByTestId('input-card-avatar-0');
    expect(avatarElement?.getAttribute('src')).toBe(mockRes[0].updatedAvatar);

    const nameElement = getByTestId('input-card-name-0');
    expect(nameElement?.textContent).toBe(`${mockRes[0].fName} ${mockRes[0].lName}`);

    const birthdayElement = getByTestId('input-card-birthday-0');
    expect(birthdayElement?.textContent).toBe(`Birthday: ${mockRes[0].birthday}`);

    const regionElement = getByTestId('input-card-region-0');
    expect(regionElement?.textContent).toBe(`Region: ${mockRes[0].region}`);

    const promoElement = getByTestId('input-card-promo-list-0');
    expect(promoElement?.textContent).toContain('You agreed to receive promotional materials.');

    const dreamElement = getByTestId('input-card-sunny-0');
    expect(dreamElement?.textContent).toBe(`Your dream: ${mockRes[0].dream}`);
  });
});
