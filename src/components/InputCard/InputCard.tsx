import FormResult from '../../pages/page-form/form-type';
import React from 'react';
import './input-card-style.css';

interface CardProps {
  res: FormResult[];
}

export class InputCard extends React.Component<CardProps> {
  render(): JSX.Element {
    const { res } = this.props;
    return (
      <>
        {res.map((item, ind) => (
          <div className="input-card" key={`input-card-${ind}`}>
            <div className="input-card-wrapper">
              <img className="input-card-avatar" src={item.updatedAvatar} alt="Avatar" />
              <div className="user-info">
                <p className="input-card-name">
                  {item.fName} {item.lName}
                </p>
                <p className="input-card-birthday">
                  <span className="input-card-title">Birthday: </span>
                  {item.birthday}
                </p>
                <p className="input-card-region">
                  <span className="input-card-title">Region: </span>
                  {item.region}
                </p>
              </div>
            </div>
            <div className="input-card-promo-list">
              <span className="input-card-title">You agreed to receive promotional materials.</span>
            </div>
            <p className="input-card-sunny">
              <span className="input-card-title">Your dream: </span>
              {item.dream}
            </p>
          </div>
        ))}
      </>
    );
  }
}
