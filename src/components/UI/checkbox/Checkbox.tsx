import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface CheckboxData {
  id: string;
  label: string;
}

export interface CheckboxProps {
  className?: string;
  id?: string;
  checkboxData: CheckboxData;
  legendTitle?: string;
  register: UseFormRegisterReturn;
}

export const Checkbox = (props: CheckboxProps) => {
  const { className, id, checkboxData, legendTitle, register } = props;

  return (
    <fieldset
      className={`${className}-fieldset`}
      id={`${id}-fieldset`}
      data-testid="checkbox-fieldset"
    >
      <legend className={`${className}-legend title`} data-testid="checkbox-legend">
        {legendTitle}
      </legend>

      <div className={`${className}-wrapper`}>
        <input
          className={`${className}-input input`}
          type="checkbox"
          id={id}
          {...register}
          data-testid="checkbox-input"
        />
        <label className={`${className}-text text`} htmlFor={id} data-testid="checkbox-label">
          {checkboxData.label}
        </label>
      </div>
    </fieldset>
  );
};
