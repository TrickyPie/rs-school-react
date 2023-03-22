import React from 'react';

type submitProps = {
  className: string;
  disabled?: boolean;
};

export class SubmitBtn extends React.Component<submitProps> {
  render() {
    const { className } = this.props;
    return (
      <button {...this.props} className={className} type="submit">
        Submit
      </button>
    );
  }
}
