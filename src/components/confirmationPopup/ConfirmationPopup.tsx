import React from 'react';

type ConfirmationPopupProps = {
  message: string;
  hideOn: () => void;
};

interface ConfirmationPopupState {
  isVisible: boolean;
}

export class ConfirmationPopup extends React.Component<
  ConfirmationPopupProps,
  ConfirmationPopupState
> {
  private timeoutId: NodeJS.Timeout | undefined;

  constructor(props: ConfirmationPopupProps) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  public componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.hide();
    }, 3000);
  }

  public componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  public hide = () => {
    this.setState({ isVisible: false });
    this.props.hideOn();
  };

  public render() {
    const { message } = this.props;
    const { isVisible } = this.state;

    return <>{isVisible && <div className="confirmation-popup">{message}</div>}</>;
  }
}
