import React, { createRef } from 'react';

interface InputProps {
  id: string;
  label: string;
  type: string;
  name: string;
  value?: string | File;
  reference?: React.Ref<HTMLInputElement>;
}

export class Input extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    const { id, label, type, name, value } = this.props;
    return (
      <div className={`form-input-wrapper wrapper-${type}`}>
        <label className={`form-${name.toLowerCase()} title`} htmlFor={id}>
          {label}:
        </label>
        <input
          className={`form-${name.toLowerCase()}-input input`}
          id={id}
          type={type}
          name={name}
          value={type === 'text' ? (value as string) : undefined}
          placeholder={type === 'text' ? label : ''}
          ref={this.props.reference}
        />
      </div>
    );
  }
}
