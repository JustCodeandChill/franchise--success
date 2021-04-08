/** @format */

import React from "react";
import { Link } from "react-router-dom";
import categoryData from "../../config/categoryData";
import './CategoryList.css';

class CategoryList extends React.Component {
  state = {
    categories: categoryData,
  };

  renderContent = () => {
    return this.state.categories.map((category) => {
      return (
        <div
          className="col m4 l3 "
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.5rem",
            marginBottom: "5px",
          }}
          key={category.name}
        >
          <Link to={`${category.link}`} className="white-text">
            <div
              className="zoom z-depth-2 left category-list"
              style={{ }}
            >
              <i
                className="circle small material-icons grey darken-1 white-text left"
                style={{ padding: "6px", marginRight: "10px" }}
              >
                {category.icon}
              </i>
              <span className="black-text">{category.name}</span>
            </div>
          </Link>
        </div>
      );
    });
  };
  render() {
    return <div className="row hide-on-small-only">{this.renderContent()}</div>;
  }
}

export default CategoryList;
