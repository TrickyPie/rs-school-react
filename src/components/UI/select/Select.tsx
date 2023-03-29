import React from 'react';

interface Option {
  value: string;
}

interface SelectProps {
  label: string;
  name: string;
  options: Option[];
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
      selectRef,
    } = this.props;
    return (
      <fieldset className={classNameWrapper}>
        <label className={classNameLabel} htmlFor={name}>
          {label}
        </label>
        <select className={classNameSelect} name={name} id={name} ref={selectRef}>
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
