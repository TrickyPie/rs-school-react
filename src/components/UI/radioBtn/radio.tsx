import React from 'react';

interface RadioProps {
  className: string;
  legendTitle: string;
  name: string;
  options: RadioBtn[];
}

interface RadioBtn {
  label: string;
  value: string;
}

export class Radio extends React.Component<RadioProps> {
  render() {
    const { className, legendTitle, name, options } = this.props;

    return (
      <fieldset className={className}>
        <legend className={`${className}-title title`}>{legendTitle}</legend>

        {options.map((option) => (
          <div className={`${className}-text-wrapper`} key={option.value}>
            <input
              className={`${className}-input input`}
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
            />
            <label className={`${className}-text text`} htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
      </fieldset>
    );
  }
}
