import { SubmitBtn } from '../../components/UI/submitBtn/SubmitBtn';
import React from 'react';
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
  public render(): JSX.Element {
    return (
      <>
        <form className="form">
          {inputsData.map((input) => (
            <Input
              key={input.name}
              id={input.id}
              label={input.label}
              type={input.type}
              name={input.name}
            />
          ))}
          <Select {...selectData} />
          <Checkbox {...characteristicsData} />
          <Radio {...radioData} />
          <Input id="avatar" label="Add avatar" type="file" name="avatar" />
          <SubmitBtn disabled className="form-submit" />
        </form>
      </>
    );
  }
}

export default Form;
