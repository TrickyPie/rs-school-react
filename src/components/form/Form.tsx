import './form-style.css';
import React, { createRef } from 'react';
import { Input } from '../../components/UI/input/Input';
import { Select } from '../../components/UI/select/Select';
import { Checkbox } from '../../components/UI/checkbox/Checkbox';
import { Radio } from '../../components/UI/radioBtn/Radio';
import { SubmitBtn } from '../../components/UI/submitBtn/SubmitBtn';
import FormResult from '../../pages/page-form/form-type';
import { ConfirmationPopup } from '../../components/confirmationPopup/ConfirmationPopup';
import { getInitial, validateAll } from './form-utils';
import { formData } from '../../mock/form-data';
const { promoData, inputsData, radioData, selectData } = formData;

interface FormProps {
  callback: (result: FormResult) => void;
}

interface FormState {
  showPopup: boolean;
  validities: Record<string, boolean>;
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
      validities: getInitial(),
      error: false,
    };
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const result: FormResult = {
      fName: this.firstnameRef.current?.value ?? '',
      lName: this.lastnameRef.current?.value ?? '',
      birthday: this.birthdayRef.current?.value ?? '',
      avatar: this.avatarRef?.current?.files?.length
        ? URL.createObjectURL(this.avatarRef?.current?.files[0])
        : '',
      region: this.selectRef.current?.value ?? '',
      promo: this.checkboxRef.current?.checked ? this.checkboxRef.current.name : '',
      dream: this.radioRefs.find((ref) => ref.current?.checked)?.current?.value ?? '',
    };

    this.validate(result);
  };

  public validate = (result: FormResult): void => {
    const avatarData: File | null = this.avatarRef.current?.files?.[0] || null;
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
            hideOn={(): void => this.setState({ showPopup: false })}
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
