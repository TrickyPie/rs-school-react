import { SubmitBtn } from '../../components/UI/submitBtn/SubmitBtn';
import React, { createRef } from 'react';
import './form-style.css';
import inputsData from '../../mock/inputs-mock';
import selectData from '../../mock/select-mock';
import { Select } from '../../components/UI/select/Select';
import { Input } from '../../components/UI/input/Input';
import { Checkbox } from '../../components/UI/checkbox/Checkbox';
import { Radio } from '../../components/UI/radioBtn/Radio';
import promoData from '../../mock/checkbox-mock';
import radioData from '../../mock/radio-mock';
import FormResult from '../../pages/page-form/form-type';
import { ConfirmationPopup } from '../../components/confirmationPopup/ConfirmationPopup';
import { validateName, validateDate, validateFile, validateNotEmpty } from './form-utils';

interface FormProps {
  callback: (result: FormResult) => void;
}

interface FormState {
  showPopup: boolean;
  firstName: boolean;
  lastName: boolean;
  avatar: boolean;
  birthDate: boolean;
  select: boolean;
  checkbox: boolean;
  radio: boolean;
  error: boolean;
}

class Form extends React.Component<FormProps, FormState> {
  private formRef: React.RefObject<HTMLFormElement> = React.createRef();
  private firstnameRef: React.RefObject<HTMLInputElement> = createRef();
  private lastnameRef: React.RefObject<HTMLInputElement> = createRef();
  private birthdayRef: React.RefObject<HTMLInputElement> = createRef();
  private avatarRef: React.RefObject<HTMLInputElement> = createRef();
  private selectRef: React.RefObject<HTMLSelectElement> = createRef();
  private checkboxRef: React.RefObject<HTMLInputElement> = createRef();
  private radioRefs: React.RefObject<HTMLInputElement>[] = radioData.options.map(() =>
    React.createRef()
  );
  private inputsRef: React.RefObject<HTMLInputElement>[] = [
    this.firstnameRef,
    this.lastnameRef,
    this.avatarRef,
    this.birthdayRef,
  ];

  constructor(props: FormProps) {
    super(props);
    this.state = {
      showPopup: false,
      firstName: true,
      lastName: true,
      avatar: true,
      birthDate: true,
      select: true,
      checkbox: true,
      radio: true,
      error: false,
    };
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result: FormResult = {
      fName: this.firstnameRef.current?.value ?? '',
      lName: this.lastnameRef.current?.value ?? '',
      birthday: this.birthdayRef.current?.value ?? '',
      avatar: this.avatarRef?.current?.files?.length
        ? URL.createObjectURL(this.avatarRef?.current?.files[0])
        : '',
      region: this.selectRef.current?.value ?? '',
      promo: this.checkboxRef.current?.checked ? this.checkboxRef.current?.name : '',
      sunLvl: this.radioRefs.find((ref) => ref.current?.checked)?.current?.name,
    };

    this.changeState(result, () => {
      this.setState(
        {
          error: this.validateAll(),
        },
        () => {
          if (this.state.error) {
            this.props.callback(result);
            this.showConfirmationPopup();
            if (this.formRef.current) {
              this.formRef.current.reset();
            }
          }
        }
      );
    });
  };

  public changeState = (result: FormResult, callback?: () => void) => {
    const isFNameValid = validateName(result.fName);
    const isLNameValid = validateName(result.lName);
    const isAvatarValid = validateFile(this.avatarRef.current?.files?.[0] || null);
    const isBirthdayValid = validateDate(result.birthday);
    const isSelectValid = validateNotEmpty(result.region);
    const isCheckboxValid = validateNotEmpty(result.promo || '');
    const isRadioValid = validateNotEmpty(result.sunLvl || '');

    this.setState(
      {
        firstName: isFNameValid,
        lastName: isLNameValid,
        avatar: isAvatarValid,
        birthDate: isBirthdayValid,
        select: isSelectValid,
        checkbox: isCheckboxValid,
        radio: isRadioValid,
      },
      callback
    );
  };

  public validateAll = () => {
    const valid =
      this.state.firstName &&
      this.state.lastName &&
      this.state.birthDate &&
      this.state.avatar &&
      this.state.select &&
      this.state.checkbox &&
      this.state.radio;
    return valid;
  };

  public showConfirmationPopup = () => {
    this.setState({ showPopup: true });
  };

  public render(): JSX.Element {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit} ref={this.formRef}>
          {inputsData.map((input, index) => (
            <Input
              key={input.name}
              id={input.id}
              label={input.label}
              type={input.type}
              name={input.name}
              reference={this.inputsRef[index]}
              error={this.state[input.name as keyof typeof this.state] ? '' : input.error}
            />
          ))}
          <Select {...selectData} selectRef={this.selectRef} />
          {!this.state.select && <p className="error">This field is required.</p>}
          <Checkbox {...promoData} checkboxRef={this.checkboxRef} />
          {!this.state.checkbox && <p className="error">This field is required.</p>}
          <Radio {...radioData} radioRefs={this.radioRefs} />
          {!this.state.radio && (
            <p className="error">This field is required. Choose only one answer.</p>
          )}
          <SubmitBtn className="form-submit" />
        </form>
        {this.state.showPopup && (
          <ConfirmationPopup
            message="Form submitted successfully!"
            hideOn={() => this.setState({ showPopup: false })}
          />
        )}
      </>
    );
  }
}

export default Form;
