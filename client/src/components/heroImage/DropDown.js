/** @format */

import React from "react";
import M from "materialize-css";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      options: this.props.data.options,
      searchWords: this.props.data.searchWords,
      chooseWord: '',
    };
  }

  componentDidMount = () => {
    let elems = document.querySelectorAll(".dropdown-trigger");
    const customize = this.props.data.customize;
    M.Dropdown.init(elems, customize);
  };

  renderOptions = () => {
    return this.state.options.map((option, key) => {
      return (
        <li key={option}>
          <a
            href="#!"
            className="black-text"
            onClick={() => {
              console.log('in renderOptions, option:', option, 'ser hwords:', this.state.searchWords[key])
                this.setState({chooseWord : option})
                this.props.onSelection(this.state.searchWords[key]);
            }}
          >
            {option}
          </a>
        </li>
      );
    });
  };
  render() {
    return (
      <div className="pink lighten-1">
        {/* Drop down content */}
        <ul id={`${this.state.id}`} className="dropdown-content">
          {this.renderOptions()}
        </ul>

        {/* Drop down trigger */}

        <a
          className="dropdown-trigger black-text left"
          data-target={`${this.state.id}`}
          href="#!"
          style={{ height: "42px", width: "100%", style: "block" }}
        >
          {this.state.chooseWord === '' ? this.state.title : this.state.chooseWord}
        </a>
      </div>
    );
  }
}

export default DropDown;
