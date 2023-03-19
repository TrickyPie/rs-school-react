import React from 'react';
import sun from '../../assets/png/contrast.png';
import water from '../../assets/png/drop.png';
import pet from '../../assets/png/pet.png';
import care from '../../assets/png/growth.png';
import { Slider } from '../../components/slider/slider';
import './card.css';
export class Card extends React.Component {
    render() {
        let petFriendlyImage = null;
        if (this.props.petFriendly) {
            petFriendlyImage = (React.createElement("img", { src: pet, alt: "Pet-friendly icon", className: "pet-friendly-icon", title: "Pet friendly" }));
        }
        let easyCareImage = null;
        if (this.props.easyCare) {
            easyCareImage = (React.createElement("img", { src: care, alt: "Easy-care icon", className: "easy-care-icon", title: "Easy care" }));
        }
        return (React.createElement("div", { className: "card-wrapper", "data-testid": "card-test" },
            React.createElement("div", { className: "slider-wrapper" },
                React.createElement(Slider, { image: this.props.image })),
            React.createElement("h3", { className: "card-title" },
                this.props.title,
                " "),
            React.createElement("p", { className: "card-description" }, this.props.description),
            petFriendlyImage,
            easyCareImage,
            React.createElement("div", { className: "card-plant-info" },
                React.createElement("div", { className: "card-sun-wrapper" },
                    React.createElement("img", { className: "card-sun-icon", src: sun, alt: "" }),
                    React.createElement("p", { className: "card-sun-info" }, this.props.bright)),
                React.createElement("div", { className: "card-water-wrapper" },
                    React.createElement("img", { className: "card-water-icon", src: water, alt: "" }),
                    React.createElement("p", { className: "card-water-info" }, this.props.water)))));
    }
}
