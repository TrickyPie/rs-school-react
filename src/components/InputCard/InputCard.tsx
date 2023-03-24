import FormResult from '../../pages/page-form/form-type';
import React from 'react';

interface CardProps {
  res: FormResult[];
}

export class InputCard extends React.Component<CardProps> {
  render(): JSX.Element {
    const { res } = this.props;
    return (
      <>
        {res.map((item, index) => (
          <div key={index}>
            <p>{item.fName}</p>
            <p>{item.lName}</p>
            <p>{item.birthday}</p>
            <p>{item.avatar}</p>
            <p>{item.region}</p>
            <p>{item.characteristics}</p>
            <p>{item.sunLvl}</p>
          </div>
        ))}
      </>
    );
  }
}
