import React from 'react';
import './slider.css';

type props = {
  image: string[];
};

type state = {
  currentIndex: number;
};

export class Slider extends React.Component<props, state> {
  private timerID?: number;

  public state: state = {
    currentIndex: 0,
  };

  public componentDidMount(): void {
    this.timerID = window.setInterval((): void => {
      this.setState((prevState: Readonly<state>): { currentIndex: number } => ({
        currentIndex: (prevState.currentIndex + 1) % this.props.image.length,
      }));
    }, 3000);
  }

  public componentWillUnmount(): void {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  public render(): JSX.Element {
    const { image }: props = this.props;
    const { currentIndex }: state = this.state;

    return (
      <div className="slider">
        <img
          src={image[currentIndex]}
          alt="Plant Image"
          className="slider-image active-image"
          data-testid="slider-test"
        />
        <img
          src={image[(currentIndex + 1) % image.length]}
          alt="Plant Image"
          className="slider-image not-active"
          data-testid="slider-test"
        />
      </div>
    );
  }
}
