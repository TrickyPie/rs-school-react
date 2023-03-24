import Form from '../../components/form/Form';
import React from 'react';
import { InputCard } from '../../components/InputCard/InputCard';
import FormResult from './form-type';
import './page-form-style.css';

type FormPageProps = {};

type FormPageState = {
  data: FormResult[];
};

class FormPage extends React.Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      data: [],
    };
    this.updateState = this.updateState.bind(this);
  }

  public updateState(newData: FormResult): void {
    this.setState((prevState: Readonly<FormPageState>): { data: FormResult[] } => ({
      data: [...prevState.data, newData],
    }));
  }

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

export default FormPage;
