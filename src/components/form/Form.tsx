import { SubmitBtn } from '../../components/UI/submitBtn/SubmitBtn';
import React, { createRef } from 'react';
import './form-style.css';
import inputsData from '../../mock/inputs-mock';
import selectData from '../../mock/select-mock';
import { Select } from '../../components/UI/select/Select';
import { Input } from '../../components/UI/input/Input';
import { Checkbox } from '../../components/UI/checkbox/Checkbox';
import { Radio } from '../../components/UI/radioBtn/Radio';
import characteristicsData from '../../mock/checkbox-mock';
import radioData from '../../mock/radio-mock';
import FormResult from '../../pages/page-form/form-type';
import { ConfirmationPopup } from '../../components/confirmationPopup/ConfirmationPopup';
import { validateName, validateDate, validateFile } from './form-utils';

interface FormProps {
  callback: (result: FormResult) => void;
}

interface FormState {
  showPopup: boolean;
  firstName: boolean;
  lastName: boolean;
  avatar: boolean;
  birthDate: boolean;
  checkbox: boolean;
  radio: boolean;
  error: boolean;
}

class Form extends React.Component<FormProps, FormState> {
  private firstnameRef: React.RefObject<HTMLInputElement> = createRef();
  private lastnameRef: React.RefObject<HTMLInputElement> = createRef();
  private birthdayRef: React.RefObject<HTMLInputElement> = createRef();
  private avatarRef: React.RefObject<HTMLInputElement> = createRef();
  private inputsRef: React.RefObject<HTMLInputElement>[] = [
    this.firstnameRef,
    this.lastnameRef,
    this.avatarRef,
    this.birthdayRef,
  ];
  private selectRef: React.RefObject<HTMLSelectElement> = createRef();
  private checkboxRefs: React.RefObject<HTMLInputElement>[] = characteristicsData.checkboxData.map(
    () => React.createRef()
  );
  private radioRefs: React.RefObject<HTMLInputElement>[] = radioData.options.map(() =>
    React.createRef()
  );

  constructor(props: FormProps) {
    super(props);
    this.state = {
      showPopup: false,
      firstName: true,
      lastName: true,
      avatar: true,
      birthDate: true,
      checkbox: true,
      radio: true,
      error: false,
    };
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedCheckboxes: (string | undefined)[] = this.checkboxRefs
      .filter((ref: React.RefObject<HTMLInputElement>): boolean | undefined => ref.current?.checked)
      .map((ref: React.RefObject<HTMLInputElement>): string | undefined => ref.current?.id);

    const selectedRadioId: string | undefined = this.radioRefs.find((ref) => ref.current?.checked)
      ?.current?.id;

    const result: FormResult = {
      fName: this.firstnameRef.current?.value ?? '',
      lName: this.lastnameRef.current?.value ?? '',
      birthday: this.birthdayRef.current?.value ?? '',
      avatar: this.avatarRef.current?.value ?? '',
      region: this.selectRef.current?.value ?? '',
      characteristics: selectedCheckboxes ?? '',
      sunLvl: selectedRadioId,
    };
    this.changeState(result, () => {
      const errors = this.validateAll();
      if (this.state.error) {
        this.props.callback(result);
        this.showConfirmationPopup();
      }
    });
  };

  public changeState = (result: FormResult, callback?: () => void) => {
    const isFNameValid = validateName(result.fName);
    const isLNameValid = validateName(result.lName);
    const isAvatarValid = validateFile(this.avatarRef.current?.files?.[0] || null);
    const isBirthdayValid = validateDate(result.birthday);

    this.setState(
      {
        firstName: isFNameValid,
        lastName: isLNameValid,

        avatar: isAvatarValid,
        birthDate: isBirthdayValid,
      },
      callback
    );
  };

  public validateAll = () => {
    const valid =
      this.state.firstName && this.state.lastName && this.state.birthDate && this.state.avatar;
    console.log(this.state.firstName, this.state.lastName, this.state.birthDate, this.state.avatar);
    this.setState({
      error: valid,
    });
  };

  public showConfirmationPopup = () => {
    this.setState({ showPopup: true });
  };

  public render(): JSX.Element {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
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
          <Checkbox {...characteristicsData} checkboxRefs={this.checkboxRefs} />
          <Radio {...radioData} radioRefs={this.radioRefs} />

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
