import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface Option {
  value: string;
}

export interface SelectProps {
  label: string;
  name: string;
  options: Option[];
  classNameWrapper?: string;
  classNameLabel?: string;
  classNameSelect?: string;
  classNameOption?: string;
  register: UseFormRegisterReturn;
}

export const Select = (props: SelectProps) => {
  const {
    label,
    name,
    options,
    classNameWrapper,
    classNameLabel,
    classNameSelect,
    classNameOption,
    register,
  } = props;
  return (
    <fieldset className={classNameWrapper}>
      <label className={classNameLabel} htmlFor={name}>
        {label}
      </label>
      <select className={classNameSelect} id={name} {...register} data-testid="region">
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} className={classNameOption} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </fieldset>
  );
};
