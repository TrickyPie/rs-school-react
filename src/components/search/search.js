import React from 'react';
import './search.css';
import search from '../../assets/png/search.png';
export class Search extends React.Component {
    state = {
        searchValue: localStorage.getItem('searchValue') || '',
    };
    componentWillUnmount(value) {
        localStorage.setItem('searchValue', value || this.state.searchValue);
    }
    handleChange = (event) => {
        this.componentWillUnmount(event.target.value);
        this.setState({ searchValue: event.target.value });
    };
    render() {
        const { searchValue } = this.state;
        return (React.createElement("div", { className: "search-bar-wrapper" },
            React.createElement("div", { className: "search-bar" },
                React.createElement("img", { className: "search-bar__icon", src: search, alt: "" }),
                React.createElement("input", { className: "search-bar__input", type: "text", value: searchValue, onChange: this.handleChange }))));
    }
}
