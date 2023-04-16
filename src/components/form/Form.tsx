import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
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
import FormResult, { FormResultForState } from '../../pages/page-form/form-type';
import { RadioData } from '../../mock/radio-mock';
import { RegionData } from '../../mock/select-mock';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setFormCards } from '../../redux/reducer';

export const CustomForm = () => {
  const formCards = useSelector((state: RootState) => state.root.formCards);
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormResult>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmitHandler = (formData: FormResult): void => {
    if (formData.avatar) {
      const avatarFile = formData.avatar[0];
      const imageUrl = URL.createObjectURL(avatarFile);
      formData.avatarUrl = imageUrl;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { avatar, ...formDataWithoutAvatar } = formData;
    submit(formDataWithoutAvatar);
  };

  const submit = (data: FormResultForState) => {
    const newFormCards = [...formCards, data];
    dispatch(setFormCards(newFormCards));
    reset();
    setShowConfirmation(true);
  };

  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfirmation]);

  return (
    <>
      {showConfirmation && (
        <div className="confirmation-popup" data-testid="confirmationPopup">
          Form submitted!
        </div>
      )}
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
    </>
  );
};
