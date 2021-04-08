/** @format */

import React from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { all } from "../../config/paragraphData";

import Spinner from "../common/Spinner";
import CardListByState from "../common/CardListByState";
import Paragraph from "../common/Paragraph";

const franchisesWords = ['giao-duc','dich-vu','giai-tri','thuc-pham'];


class AllFranchisePage extends React.Component {
  renderCategory(franchisesWord = "giai-tri") {
    let title = "";
    switch (franchisesWord) {
      case "giai-tri":
        title = "Lĩnh vực giải trí";
        break;
      case "thuc-pham":
        title = "Lĩnh vực ăn uống";
        break;
      case "giao-duc":
        title = "Lĩnh vực giáo dục";
        break;
      case "dich-vu":
        title = "Lĩnh vực dịch vụ doanh nghiệp";
        break;
      default:
        title = "Lĩnh vực dịch vụ doanh nghiệp";
    }

    return (
      <div>
        <h4>{title}</h4>
        <CardListByState franchisesWord={franchisesWord} />
        <hr />
      </div>
    );
  }

  renderAllCategory = () => {
    return franchisesWords.map(franchisesWord => {
      return this.renderCategory(franchisesWord)
    })
  }
  renderContent() {
    // (equalEmptyArray(this.state.CardLists))
    if (false) {
      console.log("in render content if", this.state.franchise);
      return <Spinner />;
    } else {
      return (
        <div>
          <Paragraph data={all} />
          <div>
{this.renderAllCategory()}
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div style={{ width: "90%", margin: "0 auto" }}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { franchises: state.franchises };
};
export default connect(mapStateToProps, actions)(AllFranchisePage);
