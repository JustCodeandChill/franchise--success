/** @format */

import React from "react";
import Button from "../Button";
import Title from "../Title";
import Galery from "./Galery";
import CategoryList from "./CategoryList";

class Section extends React.Component {
  componentDidMount() {
    return this.renderContent();
  }

  renderSectionBody(type) {
    if (type === "image") {
      return <Galery type={type} />;
    } else if (type === "category") {
      return (
        <div className="container">
          <CategoryList />
        </div>
      );
    }
  }

  renderContent() {
    const { titleConfig, buttonConfig } = this.props.config;
    const type = this.props.config.type;

    return (
      <div
        className="row grey lighten-5 section"
        style={{ marginBottom: "5px" }}
      >
        <div
          className="col s12 center hide-on-small-only "
          style={{ marginBottom: "2rem" }}
        >
          <Title {...titleConfig} />
        </div>

        <div className="col s12 center hide-on-small-only">
          {this.renderSectionBody(type)}
        </div>

        <div className="center col s12">
          <div className="row">
            <Button {...buttonConfig} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Section;
