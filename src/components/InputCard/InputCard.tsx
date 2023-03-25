import FormResult from '../../pages/page-form/form-type';
import React from 'react';
import characteristicsData from 'mock/checkbox-mock';

interface CardProps {
  res: FormResult[];
}

export class InputCard extends React.Component<CardProps> {
  render(): JSX.Element {
    const { res } = this.props;
    return (
      <>
        {res.map((item, ind) => (
          <div key={`input-card${ind}`}>
            <img className="input-card-avatar" src={item.avatar} />
            <p className="input-card-name">
              {item.fName} {item.lName}
            </p>
            <p className="input-card-name">Birthday: {item.birthday}</p>
            <p>Region: {item.region}</p>
            {item.characteristics.length &&
              item.characteristics.map((characteristic) => (
                <p key={characteristic}>{characteristic}</p>
              ))}
            <p>{item.sunLvl}</p>
          </div>
        ))}
      </>
    );
  }
}
