import React from 'react';

interface CheckboxData {
  id: string;
  label: string;
}

interface CheckboxProps {
  className?: string;
  id?: string;
  checkboxData: CheckboxData;
  legendTitle?: string;
  checkboxRef: React.RefObject<HTMLInputElement>;
}

export class Checkbox extends React.Component<CheckboxProps> {
  render() {
    const { className, id, checkboxData, legendTitle, checkboxRef } = this.props;

    return (
      <fieldset className={`${className}-fieldset`} id={`${id}-fieldset`}>
        <legend className={`${className}-legend title`}>{legendTitle}</legend>

        <div className={`${className}-wrapper`}>
          <input
            className={`${className}-input input`}
            type="checkbox"
            id={id}
            name={checkboxData.label}
            ref={checkboxRef}
          />
          <label className={`${className}-text text`} htmlFor={id}>
            {checkboxData.label}
          </label>
        </div>
      </fieldset>
    );
  }
}
