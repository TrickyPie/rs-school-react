import React from 'react';

interface RadioData {
  id: string;
  label: string;
  defaultChecked: boolean;
}

interface RadioProps {
  className?: string;
  id?: string;
  radioData: RadioData[];
  legendTitle?: string;
}

export class Radio extends React.Component<RadioProps> {
  render() {
    const { className, id, radioData, legendTitle } = this.props;

    return (
      <div className={className} id={id}>
        <fieldset className={`${className}-fieldset`}>
          <legend className={`${className}-legend title`}>{legendTitle}</legend>
          {radioData.map((radio) => (
            <div key={radio.id} className={`${className}-wrapper`}>
              <input
                className={`${className}-input input`}
                type="checkbox"
                id={radio.id}
                defaultChecked={radio.defaultChecked}
              />
              <label className={`${className}-text text`} htmlFor={radio.id}>
                {radio.label}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    );
  }
}
