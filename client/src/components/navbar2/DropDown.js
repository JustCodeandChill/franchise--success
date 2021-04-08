import React from "react";
import * as actions from "../../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class DropDown extends React.Component {
  state = {
    openDropDown: false,
  };

  openDropDown = () => {
    let status = this.state.openDropDown;
    this.setState({ openDropDown: !status });
  };

  renderButton = () => {
    return this.state.openDropDown ? (
      <i className="material-icons right">arrow_drop_up</i>
    ) : (
      <i className="material-icons right">arrow_drop_down</i>
    );
  };

  renderLinks = () => {
    let { links } = this.props.data;
    return links.map(({ url, title }) => {
      //Extract the option from url (/franchise/giai-tri -> option: giai-tri)
      let option = url.split("/");option = option[option.length - 1];

      return (
        <Link
          onClick={() => this.props.redirect(option)}
          key={title}
          href={`${url}`}
        >
          {title}
        </Link>
      );
    });
  };

  renderContent = () => {
    return (
      <div>
        <button className="dropdown-btn" onClick={() => this.openDropDown()}>
          {this.props.data.button}
          {this.renderButton()}
        </button>
        <div
          className={`dropdown-container ${
            this.state.openDropDown ? "openDD" : "closeDD"
          }`}
        >
          {this.renderLinks()}
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default connect(null, actions)(DropDown);
