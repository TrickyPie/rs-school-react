import React from 'react';
import './slider.css';
export class Slider extends React.Component {
    timerID;
    state = {
        currentIndex: 0,
    };
    componentDidMount() {
        this.timerID = window.setInterval(() => {
            this.setState((prevState) => ({
                currentIndex: (prevState.currentIndex + 1) % this.props.image.length,
            }));
        }, 3000);
    }
    componentWillUnmount() {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
    }
    render() {
        const { image } = this.props;
        const { currentIndex } = this.state;
        return (React.createElement("div", { className: "slider" },
            React.createElement("img", { src: image[currentIndex], alt: "Plant Image", className: "slider-image active-image", "data-testid": "slider-test" }),
            React.createElement("img", { src: image[(currentIndex + 1) % image.length], alt: "Plant Image", className: "slider-image not-active", "data-testid": "slider-test" })));
    }
}
