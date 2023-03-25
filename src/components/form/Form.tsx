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
import {
  validateName,
  validateDate,
  validateFile,
  validateNotEmpty,
  validateAll,
} from './form-utils';

interface FormProps {
  callback: (result: FormResult) => void;
}

interface FormState {
  showPopup: boolean;
  validities: {
    firstName: boolean;
    lastName: boolean;
    avatar: boolean;
    birthDate: boolean;
    select: boolean;
    checkbox: boolean;
    radio: boolean;
  };
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
      validities: {
        firstName: true,
        lastName: true,
        avatar: true,
        birthDate: true,
        select: true,
        checkbox: true,
        radio: true,
      },
      error: false,
    };
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { firstnameRef, lastnameRef, birthdayRef, avatarRef, selectRef, checkboxRef, radioRefs } =
      this;
    const result: FormResult = {
      fName: firstnameRef.current?.value ?? '',
      lName: lastnameRef.current?.value ?? '',
      birthday: birthdayRef.current?.value ?? '',
      avatar: avatarRef?.current?.files?.length
        ? URL.createObjectURL(avatarRef?.current?.files[0])
        : '',
      region: selectRef.current?.value ?? '',
      promo: checkboxRef.current?.checked ? checkboxRef.current.name : '',
      dream: radioRefs.find((ref) => ref.current?.checked)?.current?.value ?? '',
    };

    this.validate(result);
  };

  public validate = (result: FormResult): void => {
    const avatarData = this.avatarRef.current?.files?.[0] || null;
    const { validities, error } = validateAll(result, avatarData);

    this.setState({ validities, error }, (): void => {
      if (!error) {
        this.props.callback(result);
        this.showConfirmationPopup();
        this.formRef.current?.reset();
      }
    });
  };

  public showConfirmationPopup = (): void => {
    this.setState({ showPopup: true });
  };

  public render(): JSX.Element {
    return (
      <>
        {this.state.showPopup && (
          <ConfirmationPopup
            message="Form submitted!"
            hideOn={() => this.setState({ showPopup: false })}
          />
        )}
        <form className="form" onSubmit={this.handleSubmit} ref={this.formRef}>
          {inputsData.map((input, index) => (
            <Input
              key={input.name}
              id={input.id}
              label={input.label}
              type={input.type}
              name={input.name}
              reference={this.inputsRef[index]}
              error={
                this.state.validities[input.name as keyof typeof this.state.validities]
                  ? ''
                  : input.error
              }
            />
          ))}
          <Select {...selectData} selectRef={this.selectRef} />
          {!this.state.validities.select && <p className="error">This field is required.</p>}
          <Checkbox {...promoData} checkboxRef={this.checkboxRef} />
          {!this.state.validities.checkbox && <p className="error">This field is required.</p>}
          <Radio {...radioData} radioRefs={this.radioRefs} />
          {!this.state.validities.radio && (
            <p className="error">This field is required. Choose only one answer.</p>
          )}
          <SubmitBtn className="form-submit" />
        </form>
      </>
    );
  }
}

export default Form;
