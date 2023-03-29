import Form from '../../components/form/Form';
import React from 'react';
import { InputCard } from '../../components/InputCard/InputCard';
import FormResult from './form-type';
import './page-form-style.css';

type FormPageProps = unknown;

type FormPageState = {
  data: FormResult[];
};

export class FormPage extends React.Component<FormPageProps, FormPageState> {
  state = {
    data: [],
  };

  public updateState = (newData: FormResult): void => {
    this.setState((prevState: Readonly<FormPageState>): { data: FormResult[] } => ({
      data: [...prevState.data, newData],
    }));
  };

  render(): JSX.Element {
    return (
      <>
        <Form callback={this.updateState} />
        <div className="input-cards-container">
          <InputCard res={this.state.data} />
        </div>
      </>
    );
  }
}
