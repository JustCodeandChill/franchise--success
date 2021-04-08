/** @format */
import React from "react";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Galery extends React.Component {
  componentDidMount() {
    this.fetchFranchises();
  }

  async fetchFranchises() {
    await this.props.fetchTopFranchises();
  }

  renderContent = () => {
    if (this.props.type === "image") {
      if (!this.props.franchises) return <Spinner />;

      // If going back from CardDetail, this.props.franchise is the previous object of CardDetail not an array of franchise
      if (!Array.isArray(this.props.franchises)) {
        this.fetchFranchises();
        return <Spinner />;
      }
      return <div>{this.renderImages()}</div>;
    }
  };

  renderImages() {
    return this.props.franchises.map(({ id, logo }) => {
      return (
        <div
          className="col s12 m4 l3  grey lighten-5"
          style={{ height: "130px", margin: "0 0 2px 0" }}
          key={id} 
        >
          <Link to={`/franchise/chi-tiet/${id}`}>
            <img
              className="grey lighten-5 box-zoom"
              src={logo}
              style={{
                height: "120px",
                width: "100%",
                border: "2px solid #bdbdbd",
              }}
              alt={id}
            />
          </Link>
        </div>
      );
    });
  }

  render() {
    return <div className="row">{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  return { franchises: state.franchises };
}
export default connect(mapStateToProps, actions)(Galery);
