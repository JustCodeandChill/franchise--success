import React from "react";
//component
import Spinner from "../common/Spinner";
import CardList from "../common/CardList";
import Paragraph from "../common/Paragraph";
import SearchBox from "../heroImage/SearchBox";

//data for Paragraph Component
import { all } from "../../config/paragraphData";
//functions
import { connect } from "react-redux";
import { fetchTopFranchises } from "../../actions";
import _ from "lodash";



class CategoryPage extends React.Component {
  state = {
    franchises: [],
    id: "",
  };

  async componentDidMount() {
    await this.props.fetchTopFranchises("noi-bat");
    this.setState({ franchises: this.props.franchises });
  }

  renderContent() {
    if (_.isEmpty(this.props.franchises)) {
      return <Spinner />;
    } else {
      return (
        <div>
          <Paragraph data={all} />
          <CardList franchises={this.state.franchises} />
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
  fetchTopFranchises,
})(CategoryPage);
