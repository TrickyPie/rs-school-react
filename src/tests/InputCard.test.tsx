import React from 'react';
import { render } from '@testing-library/react';
import { InputCard } from '../components/InputCard/InputCard';

const mockRes = [
  {
    fName: 'John',
    lName: 'Doe',
    avatar: {} as FileList,
    updatedAvatar: 'http://example.com/avatar.jpg',
    birthday: '01/01/2000',
    region: 'New York',
    promo: true,
    dream: 'To travel the world',
  },
];

describe('InputCard component', () => {
  it('renders the card correctly', () => {
    const { container } = render(<InputCard res={mockRes} />);
    const cardElement = container.querySelector('.input-card');
    expect(cardElement).toBeInTheDocument();

    const avatarElement = container.querySelector('.input-card-avatar');
    expect(avatarElement).toHaveAttribute('src', mockRes[0].updatedAvatar);

    const nameElement = container.querySelector('.input-card-name');
    expect(nameElement).toHaveTextContent(`${mockRes[0].fName} ${mockRes[0].lName}`);

    const birthdayElement = container.querySelector('.input-card-birthday');
    expect(birthdayElement).toHaveTextContent(`Birthday: ${mockRes[0].birthday}`);

    const regionElement = container.querySelector('.input-card-region');
    expect(regionElement).toHaveTextContent(`Region: ${mockRes[0].region}`);

    const promoElement = container.querySelector('.input-card-promo-list');
    expect(promoElement).toHaveTextContent('You agreed to receive promotional materials.');

    const dreamElement = container.querySelector('.input-card-sunny');
    expect(dreamElement).toHaveTextContent(`Your dream: ${mockRes[0].dream}`);
  });
});
