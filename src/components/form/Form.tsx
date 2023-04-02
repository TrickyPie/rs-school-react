import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import './form-style.css';
import {
  validateCapitalize,
  validateFileType,
  validateLang,
  validateNotEmpty,
  validateNotFutureDate,
} from './form-utils';
import { Select } from '../../components/UI/select/Select';
import { Checkbox } from '../../components/UI/checkbox/Checkbox';
import { Radio } from '../../components/UI/radioBtn/Radio';
import FormResult from '../../pages/page-form/form-type';
import { ConfirmationPopup } from '../../components/confirmationPopup/ConfirmationPopup';
import { RadioData } from '../../mock/radio-mock';
import { RegionData } from '../../mock/select-mock';

export interface FormProps {
  callback: (data: FormResult) => void;
}

export const CustomForm: React.FC<FormProps> = ({ callback }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormResult>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const showConfirmationPopup = (): void => {
    setIsConfirmationVisible(true);
  };

  const onSubmitHandler = (formData: FormResult): void => {
    if (formData.avatar) {
      formData.updatedAvatar = URL.createObjectURL(formData.avatar[0]);
    }
    if (typeof callback === 'function') {
      callback(formData);
    }
    showConfirmationPopup();
    reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="form-firstname-wrapper form-input-wrapper wrapper-text">
          <label className="form-fName title" htmlFor="fName" data-testid="firstNameLabel">
            First Name:
          </label>
          <input
            id="fName"
            type="text"
            className="form-firstname-input form-input input"
            placeholder="Enter your first name"
            {...register('fName', {
              validate: {
                notStartFromLow: validateCapitalize,
                onEnglish: validateLang,
                notEmpty: validateNotEmpty,
              },
            })}
            data-testid="firstNameInput"
          />
          <span className="error" data-testid="firstNameError">
            {errors.fName && errors.fName.message}
          </span>
        </div>
        <div className="form-lastname-wrapper form-input-wrapper wrapper-text">
          <label className="form-lName title" htmlFor="lName" data-testid="lastNameLabel">
            Last Name:
          </label>
          <input
            id="lName"
            type="text"
            className="form-lastname-input form-input input"
            placeholder="Enter your last name"
            {...register('lName', {
              validate: {
                notStartFromLow: validateCapitalize,
                onEnglish: validateLang,
                notEmpty: validateNotEmpty,
              },
            })}
            data-testid="lastNameInput"
          />
          <span className="error" data-testid="lastNameError">
            {errors.lName && errors.lName.message}
          </span>
        </div>
        <div className="form-avatar-wrapper form-input-wrapper wrapper-text">
          <label className="form-avatar title" htmlFor="avatar" data-testid="avatarLabel">
            Add avatar:
          </label>
          <input
            id="avatar"
            type="file"
            accept=".png,.jpg,.jpeg"
            className="form-avatar-input form-input input"
            placeholder="Add avatar"
            {...register('avatar', {
              required: 'Avatar is required',
              validate: { validFileType: validateFileType },
            })}
            data-testid="avatarInput"
          />
          <span className="error" data-testid="avatarError">
            {errors.avatar && errors.avatar.message}
          </span>
        </div>
        <div className="form-input-wrapper wrapper-text">
          <label className="form-birthdate title" htmlFor="date" data-testid="birthdayLabel">
            Birth date:
          </label>
          <input
            id="date"
            type="date"
            className="form-birthdate-input form-input input"
            {...register('birthday', {
              required: 'Birthday is required',
              validate: { notFutureDate: validateNotFutureDate, notEmptyDate: validateNotEmpty },
            })}
            data-testid="birthdayInput"
          />
          <span className="error" data-testid="birthdayError">
            {errors.birthday && errors.birthday.message}
          </span>
        </div>
        <Select
          label="Choose your region:"
          name="region"
          classNameWrapper="form-region-wrapper"
          classNameLabel="form-region title"
          classNameSelect="form-region-select input"
          classNameOption="form-region-option text"
          data-testid="region"
          options={RegionData}
          register={register('region', { required: true })}
        />
        {errors?.region && (
          <span className="error" data-testid="regionError">
            Region is required
          </span>
        )}
        <Checkbox
          checkboxData={{
            id: 'promo',
            label: 'Do you agree to receive promotional messages every 5 minutes by SMS and mail?',
          }}
          className="form-characteristic"
          id="form-characteristic"
          register={register('promo', { required: true })}
          data-testid="checkbox-input"
        />
        {errors.promo && (
          <p className="error" data-testid="promoError">
            This field is required.
          </p>
        )}
        <Radio
          className="form-sunny-lvl"
          legendTitle="What do you dream about?"
          name="sunLvl"
          options={RadioData}
          register={register('dream', { required: true })}
          data-testid="sunLvlRadio"
        />
        {errors.dream && (
          <p className="error" data-testid="dreamError">
            This field is required.
          </p>
        )}
        <button type="submit" className="form-submit btn" data-testid="submitButton">
          Submit
        </button>
      </form>
      {isConfirmationVisible && (
        <ConfirmationPopup
          message="Form submitted!"
          hideOn={() => setIsConfirmationVisible(false)}
          data-testid="confirmationPopup"
        />
      )}
    </>
  );
};
