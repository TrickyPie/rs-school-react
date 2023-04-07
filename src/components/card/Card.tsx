import React from 'react';
import './card-style.css';
import { Slider } from '../slider/Slider';
import pet from '../../assets/png/pet.png';
import care from '../../assets/png/growth.png';

export type Plant = {
  id: number;
  image: string[];
  title: string;
  description?: string;
  petFriendly: boolean;
  easyCare: boolean;
  bright?: string;
  water?: string;
};

type CardProps = Plant & {
  onCardClick: () => void;
};

export const Card = (props: CardProps) => {
  const { image, title, petFriendly, easyCare, onCardClick } = props;

  const petFriendlyImage: JSX.Element | null = petFriendly ? (
    <img src={pet} alt="Pet-friendly icon" className="pet-friendly-icon" title="Pet friendly" />
  ) : null;

  const easyCareImage: JSX.Element | null = easyCare ? (
    <img src={care} alt="Easy-care icon" className="easy-care-icon" title="Easy care" />
  ) : null;

  return (
    <>
      <div className="card-wrapper" data-testid="card-test" onClick={onCardClick}>
        <div className="slider-wrapper">
          <Slider image={image} />
        </div>

        <h3 className="card-title" data-testid="title">
          {title}
        </h3>
        {petFriendlyImage}
        {easyCareImage}
      </div>
    </>
  );
};
