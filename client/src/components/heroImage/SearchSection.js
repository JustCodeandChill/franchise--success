/** @format */

import React from "react";
import DropDown from "./DropDown";
import { bySection } from "../../config/dropdowndata";
import { connect } from "react-redux";
import * as actions from "../../actions";

class SearchSection extends React.Component {
  state = {
    category: "",
  };
  onSelection = (option) => {
    this.setState({ category: option });
  };

  onSearch = async () => {
    this.props.clearState();
    this.props.redirect(this.state.category);
  };
  render() {
    return (
      <div className="row" style={{ width: "95%" }}>
        <div className="col s12 m12 l6 search">
          <div>
            <DropDown onSelection={this.onSelection} data={bySection} />
          </div>
        </div>
        
        <div className="col s12 m12 l3">
          <button className="button" onClick={() => this.onSearch()}>
            Tìm kiếm &ensp;
            <i className="material-icons">search</i>
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SearchSection);
