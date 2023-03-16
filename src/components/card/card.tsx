import React from 'react';
import sun from '../../assets/png/contrast.png';
import water from '../../assets/png/drop.png';
import pet from '../../assets/png/pet.png';
import care from '../../assets/png/growth.png';
import { Slider } from '../../components/slider/slider';
import './card.css';

type props = {
  id: number;
  image: string[];
  title: string;
  description: string;
  petFriendly: boolean;
  easyCare: boolean;
  bright: string;
  water: string;
};

export class Card extends React.Component<props> {
  public render() {
    let petFriendlyImage = null;
    if (this.props.petFriendly) {
      petFriendlyImage = (
        <img src={pet} alt="Pet-friendly icon" className="pet-friendly-icon" title="Pet friendly" />
      );
    }
    let easyCareImage = null;
    if (this.props.easyCare) {
      easyCareImage = (
        <img src={care} alt="Easy-care icon" className="easy-care-icon" title="Easy care" />
      );
    }
    return (
      <div className="card-wrapper">
        <div className="slider-wrapper">
          <Slider image={this.props.image} />
        </div>

        <h3 className="card-title">{this.props.title} </h3>
        <p className="card-description">{this.props.description}</p>
        {petFriendlyImage}
        {easyCareImage}
        <div className="card-plant-info">
          <div className="card-sun-wrapper">
            <img className="card-sun-icon" src={sun} alt=""></img>
            <p className="card-sun-info">{this.props.bright}</p>
          </div>
          <div className="card-water-wrapper">
            <img className="card-water-icon" src={water} alt=""></img>
            <p className="card-water-info">{this.props.water}</p>
          </div>
        </div>
      </div>
    );
  }
}
