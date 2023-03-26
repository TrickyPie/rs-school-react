import React from 'react';

interface InputProps {
  id: string;
  label: string;
  type: string;
  name: string;
  value?: string | File;
  reference?: React.Ref<HTMLInputElement>;
  error: string;
}

export class Input extends React.Component<InputProps> {
  render(): JSX.Element {
    const { id, label, type, name, value, error } = this.props;
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
        {this.props.error.length > 0 && <p className="error">{error}</p>}
      </div>
    );
  }
}
