import React from 'react';

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
      petFriendlyImage = <img src="" alt="Pet-friendly icon" />;
    }
    let easyCareImage = null;
    if (this.props.easyCare) {
      easyCareImage = <img src="" alt="Easy-care icon" />;
    }
    return (
      <div className="card-wrapper">
        <div>
          <div>
            <img src="" alt="Easy-care icon"></img>
          </div>
        </div>

        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        {petFriendlyImage}
        {easyCareImage}
        <p>{this.props.bright}</p>
        <p>{this.props.water}</p>
      </div>
    );
  }
}
