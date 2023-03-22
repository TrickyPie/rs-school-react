import React from 'react';

interface CheckboxData {
  id: string;
  label: string;
  defaultChecked: boolean;
}

interface CheckboxProps {
  className?: string;
  id?: string;
  checkboxData: CheckboxData[];
  legendTitle?: string;
}

export class Checkbox extends React.Component<CheckboxProps> {
  render() {
    const { className, id, checkboxData, legendTitle } = this.props;

    return (
      <fieldset className={`${className}-fieldset`} id={id}>
        <legend className={`${className}-legend title`}>{legendTitle}</legend>
        {checkboxData.map((checkbox) => (
          <div key={checkbox.id} className={`${className}-wrapper`}>
            <input
              className={`${className}-input input`}
              type="checkbox"
              id={checkbox.id}
              defaultChecked={checkbox.defaultChecked}
            />
            <label className={`${className}-text text`} htmlFor={checkbox.id}>
              {checkbox.label}
            </label>
          </div>
        ))}
      </fieldset>
    );
  }
}
