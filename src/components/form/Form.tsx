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

class Form extends React.Component {
  private firstnameRef: React.RefObject<HTMLInputElement> = createRef();
  private lastnameRef: React.RefObject<HTMLInputElement> = createRef();
  private birthdayRef: React.RefObject<HTMLInputElement> = createRef();
  private avatarRef: React.RefObject<HTMLInputElement> = createRef();
  private inputsRef = [this.firstnameRef, this.lastnameRef, this.birthdayRef];
  private selectRef: React.RefObject<HTMLSelectElement> = createRef();
  private checkboxRefs: React.RefObject<HTMLInputElement>[] = characteristicsData.checkboxData.map(
    () => React.createRef()
  );
  private radioRefs: React.RefObject<HTMLInputElement>[] = radioData.options.map(() =>
    React.createRef()
  );

  private handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const selectedCheckboxes = this.checkboxRefs
      .filter((ref) => ref.current?.checked)
      .map((ref) => ref.current?.id);

    const selectedRadio = this.radioRefs.find((ref) => ref.current?.checked);
    const selectedRadioId = selectedRadio?.current?.id;
    console.log(
      this.firstnameRef.current?.value,
      this.lastnameRef.current?.value,
      this.birthdayRef.current?.value,
      this.avatarRef.current?.value,
      this.selectRef.current?.value,
      selectedCheckboxes,
      selectedRadioId
    );
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
            />
          ))}
          <Select {...selectData} selectRef={this.selectRef} />
          <Checkbox {...characteristicsData} checkboxRefs={this.checkboxRefs} />
          <Radio {...radioData} radioRefs={this.radioRefs} />
          <Input
            id="avatar"
            label="Add avatar"
            type="file"
            name="avatar"
            reference={this.avatarRef}
          />
          <SubmitBtn className="form-submit" />
        </form>
      </>
    );
  }
}

export default Form;
