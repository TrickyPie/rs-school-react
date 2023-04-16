import React from 'react';
import './input-card-style.css';
import FormResult from '../../pages/page-form/form-type';

type InputCardProps = {
  card: FormResult;
  onRendered: (card: FormResult) => void;
  ind: React.Key | null | undefined;
};

export const InputCard = ({ card, onRendered, ind }: InputCardProps) => {
  const handleCardRendered = () => {
    onRendered(card);
  };

  return (
    <>
      <div
        className="input-card"
        data-testid={`input-card-${ind}`}
        key={`input-card-${ind}`}
        onClick={handleCardRendered}
      >
        <div className="input-card-wrapper">
          <img
            className="input-card-avatar"
            src={card.avatarUrl}
            data-testid={`input-card-avatar-${ind}`}
            alt="Avatar"
          />
          <div className="user-info">
            <p className="input-card-name" data-testid={`input-card-name-${ind}`}>
              {card.fName} {card.lName}
            </p>
            <p className="input-card-birthday" data-testid={`input-card-birthday-${ind}`}>
              <span className="input-card-title">Birthday: </span>
              {card.birthday}
            </p>
            <p className="input-card-region" data-testid={`input-card-region-${ind}`}>
              <span className="input-card-title">Region: </span>
              {card.region}
            </p>
          </div>
        </div>
        <div className="input-card-promo-list" data-testid={`input-card-promo-list-${ind}`}>
          <span className="input-card-title">You agreed to receive promotional materials.</span>
        </div>
        <p className="input-card-sunny" data-testid={`input-card-sunny-${ind}`}>
          <span className="input-card-title">Your dream: </span>
          {card.dream}
        </p>
      </div>
    </>
  );
};
