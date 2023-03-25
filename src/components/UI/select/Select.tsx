import React, { createRef } from 'react';

interface SelectProps {
  label: string;
  name: string;
  options: { value: string }[];
  classNameWrapper?: string;
  classNameLabel?: string;
  classNameSelect?: string;
  classNameOption?: string;
  selectRef?: React.RefObject<HTMLSelectElement>;
}

export class Select extends React.Component<SelectProps> {
  render() {
    const {
      label,
      name,
      options,
      classNameWrapper,
      classNameLabel,
      classNameSelect,
      classNameOption,
    } = this.props;
    return (
      <fieldset className={classNameWrapper}>
        <label className={classNameLabel} htmlFor={name}>
          {label}
        </label>
        <select className={classNameSelect} name={name} id={name} ref={this.props.selectRef}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} className={classNameOption} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </fieldset>
    );
  }
}
