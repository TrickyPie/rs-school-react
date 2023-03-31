import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface RadioBtn {
  label: string;
  value: string;
}

interface RadioProps {
  className: string;
  legendTitle: string;
  name: string;
  options: RadioBtn[];
  register: UseFormRegisterReturn;
}

export const Radio = (props: RadioProps) => {
  const { className, legendTitle, name, options, register } = props;
  return (
    <>
      <fieldset className={className}>
        <legend className={`${className}-title title`} data-testid="legend">
          {legendTitle}
        </legend>
        {options.map(
          (option: RadioBtn): JSX.Element => (
            <div className={`${className}-text-wrapper`} key={option.value}>
              <input
                className={`${className}-input input`}
                type="radio"
                id={option.value}
                value={option.label}
                {...register}
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
};
