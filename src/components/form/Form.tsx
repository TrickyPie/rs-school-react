import './form-style.css';
import { useForm } from 'react-hook-form';
import React from 'react';
import { Select } from '../../components/UI/select/Select';
import { Checkbox } from '../../components/UI/checkbox/Checkbox';
import { Radio } from '../../components/UI/radioBtn/Radio';
import FormResult from '../../pages/page-form/form-type';
import { ConfirmationPopup } from '../../components/confirmationPopup/ConfirmationPopup';

interface FormProps {
  callback: (data: FormResult) => void;
}

export const CustomForm: React.FC<FormProps> = ({ callback }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormResult>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data: FormResult) => {
    if (typeof callback === 'function') {
      callback(data);
      clearErrors();
    }
    console.log(data);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-firstname-wrapper form-input-wrapper wrapper-text">
          <label className="form-fName title" htmlFor="fName">
            First Name:
          </label>
          <input
            id="fName"
            type="text"
            className="form-firstname-input form-input input"
            placeholder="Enter your first name"
            {...register('fName', {
              validate: {
                required: (value) => value.trim().length > 0 || 'First name is required',
                pattern: (value) =>
                  /^[A-Z][a-z]{2,}$/.test(value) ||
                  'First name must contain at least 3 characters and start with a capital letter',
              },
            })}
          />
          <span className="error">{errors.fName && errors.fName.message}</span>
        </div>
        <div className="form-lastname-wrapper form-input-wrapper wrapper-text">
          <label className="form-lName title" htmlFor="lName">
            Last Name:
          </label>
          <input
            id="lName"
            type="text"
            className="form-lastname-input form-input input"
            placeholder="Enter your last name"
            {...register('lName', {
              validate: {
                required: (value) => value.trim().length > 0 || 'Last name is required',
                pattern: (value) =>
                  /^[A-Z][a-z]{2,}$/.test(value) ||
                  'Last name must contain at least 3 characters and start with a capital letter',
              },
            })}
          />
          <span className="error">{errors.lName && errors.lName.message}</span>
        </div>

        <Select
          name="region"
          label="Choose your region:"
          classNameWrapper="form-region-wrapper"
          classNameLabel="form-region title"
          classNameSelect="form-region-select input"
          classNameOption="form-region-option text"
          options={[
            { value: 'Asia' },
            { value: 'Africa' },
            { value: 'North America' },
            { value: 'South America' },
            { value: 'Antarctica' },
            { value: 'Europe' },
            { value: 'Australia' },
          ]}
          register={register('region', { required: true })}
        />
        {errors?.region && <span className="error">Region is required</span>}

        <button type="submit" className="form-submit-btn btn">
          Submit
        </button>
      </form>
    </>
  );
};

/*

        <Checkbox {...promoData} checkboxRef={register({ required: true })} />
        {formState.errors.checkbox && <p className="error">This field is required.</p>}

        <Radio
          {...radioData}
          radioRefs={radioData.options.map(() => register({ required: true }))}
        />
        {formState.errors.radio && <p className="error">This field is required.</p>}

        <Input
          id="avatar"
          label="Avatar"
          type="file"
          name="avatar"
          inputRef={register({ validate: (value) => getInitial(value, 'avatar', true) })}
          error={formState.errors.avatar?.message}
        />*/
