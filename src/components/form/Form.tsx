import './form-style.css';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { Select } from '../../components/UI/select/Select';
import { Checkbox } from '../../components/UI/checkbox/Checkbox';
import { Radio } from '../../components/UI/radioBtn/Radio';
import FormResult from '../../pages/page-form/form-type';
import { ConfirmationPopup } from '../../components/confirmationPopup/ConfirmationPopup';

interface FormProps {
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

  const showConfirmationPopup = () => {
    setIsConfirmationVisible(true);
  };

  const validateNotFutureDate = (value: string) => {
    const selectedDate = new Date(value);
    const currentDate = new Date();
    return (
      selectedDate <= currentDate ||
      `Date must not be greater than the current one (${currentDate.toLocaleDateString()})`
    );
  };

  const validateNotEmptyDate = (value: string) => {
    return value !== '' || 'Please select a valid date';
  };

  const onSubmitHandler = (formData: FormResult) => {
    if (formData.avatar) {
      const imageUrl = URL.createObjectURL(formData.avatar[0]);
      console.log(imageUrl);
      formData.updatedAvatar = imageUrl;
    }

    if (typeof callback === 'function') {
      callback(formData);
    }
    showConfirmationPopup();
    reset();
  };

  return (
    <>
      {isConfirmationVisible && (
        <ConfirmationPopup
          message="Form submitted!"
          hideOn={() => setIsConfirmationVisible(false)}
        />
      )}
      <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
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
              required: 'First name is required',
              pattern: {
                value: /^[A-Z][a-z]{2,}$/,
                message:
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
              required: 'Last name is required',
              pattern: {
                value: /^[A-Z][a-z]{2,}$/,
                message:
                  'Last name must contain at least 3 characters and start with a capital letter',
              },
            })}
          />
          <span className="error">{errors.lName && errors.lName.message}</span>
        </div>

        <div className="form-avatar-wrapper form-input-wrapper wrapper-text">
          <label className="form-avatar title" htmlFor="avatar">
            Add avatar:
          </label>
          <input
            id="avatar"
            type="file"
            accept=".png,.jpg,.jpeg"
            className="form-avatar-input form-input input"
            placeholder="Add avatar"
            {...register('avatar', {
              validate: (file: FileList) => {
                const selectedFile = file[0];
                if (!selectedFile) {
                  return 'Please select a file';
                }
                if (!['image/png', 'image/jpeg', 'image/jpg'].includes(selectedFile.type)) {
                  return 'File type not supported';
                }
                return true;
              },
            })}
          />
          <span className="error">{errors.avatar && errors.avatar.message}</span>
        </div>

        <div className="form-input-wrapper wrapper-text">
          <label className="form-birthdate title" htmlFor="date">
            Birth date:
          </label>
          <input
            id="date"
            type="date"
            className="form-birthdate-input form-input input"
            {...register('birthday', {
              required: 'Birthday is required',
              validate: {
                notFutureDate: validateNotFutureDate,
                notEmptyDate: validateNotEmptyDate,
              },
            })}
          />
          <span className="error">{errors.birthday && errors.birthday.message}</span>
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

        <Checkbox
          checkboxData={{
            id: 'promo',
            label: 'Do you agree to receive promotional messages every 5 minutes by SMS and mail?',
          }}
          className="form-characteristic"
          id="form-characteristic"
          register={register('promo', { required: true })}
        />
        {errors.promo && <p className="error">This field is required.</p>}

        <Radio
          className="form-sunny-lvl"
          legendTitle="What do you dream about?"
          name="sunLvl"
          options={[
            {
              label: 'Get enough sleep',
              value: 'little',
            },
            {
              label: 'Find a job',
              value: 'medium',
            },
            {
              label: 'Pet the penguin',
              value: 'a lot',
            },
          ]}
          register={register('dream', { required: true })}
        />
        {errors.dream && <p className="error">This field is required.</p>}
        <button type="submit" className="form-submit btn">
          Submit
        </button>
      </form>
    </>
  );
};
