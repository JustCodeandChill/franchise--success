import React from "react";
//component
import Spinner from "../common/Spinner";
import CardList from "../common/CardList";
import Paragraph from "../common/Paragraph";
import SearchBox from "../heroImage/SearchBox";
import AllFranchisePage from "./AllFranchisePage";

//data for Paragraph Component
import {
  education,
  entertainment,
  food,
  service,
  all,
} from "../../config/paragraphData";
//functions
import { connect } from "react-redux";
import {
  fetchFranchiseByCategory,
  fetchTopFranchises,
} from "../../actions";
import _ from "lodash";

function findParagraphDataByTranslatingMeaningFromVietnam(word) {
  switch (word) {
    case "giai-tri":
      return entertainment;
    case "giao-duc":
      return education;
    case "thuc-pham":
      return food;
    case "dich-vu":
      return service;
    case "noi-bat":
      return all;
    default:
      return all;
  }
}

class CategoryPage extends React.Component {
  state = {
    franchises: this.props.franchises,
    id: "",
  };

  // async componentDidMount() {
    // if (this.props.match.params.id === "noi-bat")
    //   await this.props.fetchTopFranchises(this.props.match.params.id);
  // }

  renderContent() {
    if (this.props.match.params.id === "tat-ca-linh-vuc")
    return <AllFranchisePage />;

    if (_.isEmpty(this.props.match.params.id)) {
      return <Spinner />;
    } else {
      
      const data = findParagraphDataByTranslatingMeaningFromVietnam(
        this.props.match.params.id
      );

      return (
        <div>
          <Paragraph data={data} />
          <CardList
            franchisesWord={this.props.match.params.id}
            franchises={this.state.franchises}
          />
        </div>
      );
      
    }
    
  }

  render() {
    return (
      <div>
        <SearchBox />
        <div style={{ width: "90%", margin: "0 auto" }}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { franchises: state.franchises };
}
export default connect(mapStateToProps, {
  fetchFranchiseByCategory,
  fetchTopFranchises,
})(CategoryPage);
