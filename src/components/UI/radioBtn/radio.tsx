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
  render(): JSX.Element {
    const { className, legendTitle, name, options, radioRefs } = this.props;
    return (
      <>
        <fieldset className={className}>
          <legend className={`${className}-title title`} data-testid="legend">
            {legendTitle}
          </legend>
          {options.map(
            (option: RadioBtn, index: number): JSX.Element => (
              <div className={`${className}-text-wrapper`} key={option.value}>
                <input
                  className={`${className}-input input`}
                  type="radio"
                  id={option.value}
                  name={name}
                  value={option.label}
                  ref={radioRefs[index]}
                />
                <label className={`${className}-text text`} htmlFor={option.value}>
                  {option.label}
                </label>
              </div>
            )
          )}
        </fieldset>
      </>
    );
  }
}

export default Radio;
