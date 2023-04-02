import React from 'react';
import './input-card-style.css';
import FormResult from '../../pages/page-form/form-type';

interface CardProps {
  res: FormResult[];
}

export const InputCard = (props: CardProps) => {
  const { res } = props;
  return (
    <>
      {res.map((item, ind) => (
        <div className="input-card" data-testid={`input-card-${ind}`} key={`input-card-${ind}`}>
          <div className="input-card-wrapper">
            <img
              className="input-card-avatar"
              src={item.updatedAvatar}
              data-testid={`input-card-avatar-${ind}`}
              alt="Avatar"
            />
            <div className="user-info">
              <p className="input-card-name" data-testid={`input-card-name-${ind}`}>
                {item.fName} {item.lName}
              </p>
              <p className="input-card-birthday" data-testid={`input-card-birthday-${ind}`}>
                <span className="input-card-title">Birthday: </span>
                {item.birthday}
              </p>
              <p className="input-card-region" data-testid={`input-card-region-${ind}`}>
                <span className="input-card-title">Region: </span>
                {item.region}
              </p>
            </div>
          </div>
          <div className="input-card-promo-list" data-testid={`input-card-promo-list-${ind}`}>
            <span className="input-card-title">You agreed to receive promotional materials.</span>
          </div>
          <p className="input-card-sunny" data-testid={`input-card-sunny-${ind}`}>
            <span className="input-card-title">Your dream: </span>
            {item.dream}
          </p>
        </div>
      ))}
    </>
  );
};
