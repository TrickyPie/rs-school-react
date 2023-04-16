import React from 'react';
import './page-form-style.css';
import { CustomForm } from '../../components/form/Form';
import { InputCards } from '../../components/input-cards-list/input-cardslist';

export const FormPage = () => {
  return (
    <>
      <CustomForm />
      <InputCards />
    </>
  );
};
