import React, { MouseEventHandler } from 'react';
import './card-style.css';
import { Slider } from '../slider/Slider';
import pet from '../../assets/png/pet.png';
import care from '../../assets/png/growth.png';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { addClickedCardId } from '../../redux/reducer';

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

export type CardProps = Plant & {
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export const Card = (props: CardProps) => {
  const { id, title, image, petFriendly, easyCare } = props;
  const dispatch = useDispatch<AppDispatch>();

  const petFriendlyImage: JSX.Element | null = petFriendly ? (
    <img
      src={pet}
      alt="Pet-friendly icon"
      className="pet-friendly-icon"
      title="Pet friendly"
      data-testid="pet-friendly-icon"
    />
  ) : null;

  const easyCareImage: JSX.Element | null = easyCare ? (
    <img
      src={care}
      alt="Easy-care icon"
      className="easy-care-icon"
      title="Easy care"
      data-testid="easy-care-icon"
    />
  ) : null;

  const handleClick = () => {
    dispatch(addClickedCardId(id));
  };

  return (
    <div className="card-wrapper" data-testid="card-test" onClick={handleClick}>
      <div className="slider-wrapper">
        <Slider image={image} />
      </div>

      <h3 className="card-title" data-testid="title">
        {title}
      </h3>
      {petFriendlyImage}
      {easyCareImage}
    </div>
  );
};
