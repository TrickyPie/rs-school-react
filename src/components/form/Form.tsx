import { SubmitBtn } from '../../components/UI/submitBtn/SubmitBtn';
import React from 'react';
import './form-style.css';
import inputsData from '../../mock/inputs-mock';
import selectData from '../../mock/select-mock';
import { Select } from '../../components/UI/select/Select';
import { Input } from '../../components/UI/textInput/TextInput';
import characteristicsData from '../../mock/checkbox-mock';
import { Checkbox } from '../../components/UI/checkbox/Checkbox';

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

          <fieldset className="form-sunny-lvl">
            <legend className="form-sunny-lvl-title title">How sunny is the window sill?</legend>

            <div className="form-sunny-lvl-text-wrapper">
              <input
                className="form-sunny-lvl-input input"
                type="radio"
                id="littleSunny"
                name="sunLvl"
              />
              <label className="form-sunny-lvl-text text" htmlFor="littleSunny">
                little lvl
              </label>
            </div>

            <div className="form-sunny-lvl-text-wrapper">
              <input
                className="form-sunny-lvl-input input"
                type="radio"
                id="mediumSunny"
                name="sunLvl"
              />
              <label className="form-sunny-lvl-text text" htmlFor="mediumSunny">
                medium lvl
              </label>
            </div>

            <div className="form-sunny-lvl-text-wrapper">
              <input
                className="form-sunny-lvl-input input"
                type="radio"
                id="aLotSunny"
                name="sunLvl"
              />
              <label className="form-sunny-lvl-text text" htmlFor="aLotSunny">
                a lot lvl
              </label>
            </div>
          </fieldset>

          <label className="form-avatar title" htmlFor="avatar">
            Add avatar:
            <input className="form-avatar-input input" type="file" name="avatar" />
          </label>

          <SubmitBtn disabled className="form-submit" />
        </form>
      </>
    );
  }
}

export default Form;
