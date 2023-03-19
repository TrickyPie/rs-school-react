import React from 'react';
import { Search } from '../../components/search/search';
import { Cards } from '../../components/cards/cards';
import cardData from '../../mock/mock';
import './home.css';
class MainPage extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Search, null),
            React.createElement("div", { className: "cards-container" }, React.createElement(Cards, { cardData: cardData }))));
    }
}
export default MainPage;
