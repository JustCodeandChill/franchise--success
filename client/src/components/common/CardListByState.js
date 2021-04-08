import React from "react";
import Card from "./Card";
import Spinner from '../common/Spinner';
import { connect } from "react-redux";
import { fetchFranchiseByCategory } from "../../actions";
import _ from 'lodash';

//bystate suitable when you want seperate CardList with diefferent data
class CardListByState extends React.Component {
  state = {
    franchises: [],
  };
  async componentDidMount() {
    //franchises props could be a string i.e"giai-tri" or an array of franchise to pass to Card
    // if (typeof this.props.franchises !== "object") 
    if (this.props.franchisesWord)
      await this.props.fetchFranchiseByCategory(this.props.franchisesWord);

    //re-render the page after fetching data
    this.setState({ franchises: this.props.franchises });
  }
  renderContent = () => {
    try {
      if (_.isEmpty(this.state.franchises)) {
        return <Spinner/>
      }
      else {
        return this.state.franchises.map((franchise) => {
          return <Card key={franchise.name} franchise={franchise} />;
        })
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return <div className="row">{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  return { franchises: state.franchises };
}

export default connect(mapStateToProps, { fetchFranchiseByCategory })(CardListByState);
