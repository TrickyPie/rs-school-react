import React from 'react';
import './card-style.css';
import { Slider } from '../slider/Slider';
import sun from '../../assets/png/contrast.png';
import drop from '../../assets/png/drop.png';
import pet from '../../assets/png/pet.png';
import care from '../../assets/png/growth.png';

export type props = {
  id: number;
  image: string[];
  title: string;
  description: string;
  petFriendly: boolean;
  easyCare: boolean;
  bright: string;
  water: string;
};

export const Card = (props: props) => {
  const { image, title, description, petFriendly, easyCare, bright, water } = props;

  const petFriendlyImage: JSX.Element | null = petFriendly ? (
    <img src={pet} alt="Pet-friendly icon" className="pet-friendly-icon" title="Pet friendly" />
  ) : null;

  const easyCareImage: JSX.Element | null = easyCare ? (
    <img src={care} alt="Easy-care icon" className="easy-care-icon" title="Easy care" />
  ) : null;

  return (
    <div className="card-wrapper" data-testid="card-test">
      <div className="slider-wrapper">
        <Slider image={image} />
      </div>

      <h3 className="card-title" data-testid="title">
        {title}
      </h3>
      <p className="card-description" data-testid="description">
        {description}
      </p>
      {petFriendlyImage}
      {easyCareImage}
      <div className="card-plant-info">
        <div className="card-sun-wrapper">
          <img className="card-sun-icon" src={sun} alt="" />
          <p className="card-sun-info" data-testid="bright">
            {bright}
          </p>
        </div>
        <div className="card-water-wrapper">
          <img className="card-water-icon" src={drop} alt="" />
          <p className="card-water-info" data-testid="water">
            {water}
          </p>
        </div>
      </div>
    </div>
  );
};
