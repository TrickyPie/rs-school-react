import { Card } from '../../components/card/card';
import React from 'react';
export class Cards extends React.Component {
    render() {
        const { cardData } = this.props;
        return (React.createElement(React.Fragment, null, cardData.map((cardProps) => {
            {
                return React.createElement(Card, { key: cardProps.id, ...cardProps });
            }
        })));
    }
}
