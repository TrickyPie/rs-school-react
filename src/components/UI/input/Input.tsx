import React from 'react';

interface InputProps {
  id: string;
  label: string;
  type: string;
  name: string;
  value?: string | File;
}

export class Input extends React.Component<InputProps> {
  render() {
    const { id, label, type, name, value } = this.props;
    return (
      <div className={`form-input-wrapper wrapper-${type}`}>
        <label className={`form-${name.toLowerCase()} title`} htmlFor={id}>
          {label}:
        </label>
        {type === 'file' ? (
          <input
            className={`form-${name.toLowerCase()}-input input`}
            id={id}
            type={type}
            name={name}
          />
        ) : (
          <input
            className={`form-${name.toLowerCase()}-input input`}
            id={id}
            type={type}
            name={name}
            value={value as string}
            placeholder={type === 'text' ? label : ''}
          />
        )}
      </div>
    );
  }
}
