import React from 'react';

type submitProps = {
  className: string;
};

export class SubmitBtn extends React.Component<submitProps> {
  render(): JSX.Element {
    const { className } = this.props;
    return (
      <button className={className} type="submit">
        Submit
      </button>
    );
  }
}
