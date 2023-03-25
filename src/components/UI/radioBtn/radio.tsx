import React from 'react';

interface RadioBtn {
  label: string;
  value: string;
}

interface RadioProps {
  className: string;
  legendTitle: string;
  name: string;
  options: RadioBtn[];
  radioRefs: React.RefObject<HTMLInputElement>[];
}

export class Radio extends React.Component<RadioProps> {
  render() {
    const { className, legendTitle, name, options, radioRefs } = this.props;

    return (
      <fieldset className={className}>
        <legend className={`${className}-title title`}>{legendTitle}</legend>

        {options.map((option, index) => (
          <div className={`${className}-text-wrapper`} key={option.value}>
            <input
              className={`${className}-input input`}
              type="radio"
              id={option.value}
              name={option.label}
              value={option.value}
              ref={radioRefs[index]}
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
