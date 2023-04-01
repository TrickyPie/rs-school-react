import React, { useState } from 'react';
import './page-form-style.css';
import FormResult from './form-type';
import { InputCard } from '../../components/InputCard/InputCard';
import { CustomForm } from '../../components/form/Form';

export const FormPage = () => {
  const [data, setData] = useState<FormResult[]>([]);

  const updateState = (newData: FormResult): void => {
    setData((prevState) => [...prevState, newData]);
    console.log(newData, data);
  };

  return (
    <>
      <CustomForm callback={updateState} />
      <div className="input-cards-container">
        <InputCard res={data} />
      </div>
    </>
  );
};
