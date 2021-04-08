import React from "react";
import { connect } from "react-redux";
import { fetchFranchiseByName } from "../../actions";
import Spinner from "../common/Spinner";
import SearchBox from '../heroImage/SearchBox';
import renderDetailInfo from "../../utils/jsxColGenerator";

class CardDetail extends React.Component {
  state = {
    franchise: {},
  };

  async componentDidMount() {
    await this.props.fetchFranchiseByName(this.props.location.pathname);
    this.setState({ franchise: this.props.franchise });
  }

  renderInfo() {
    const franchise = this.state.franchise;
    return (
      <div style={{fontSize:'1.2rem'}}>
        {renderDetailInfo("Franchise", franchise.name)}
        {renderDetailInfo("Vốn lưu động", franchise.work_capital)}
        {renderDetailInfo(
          "Vốn lưu động 6 tháng",
          franchise.sixMonthWorth_work_capital
        )}
        {renderDetailInfo("Biên đầu tư", franchise.investment_range)}
        {renderDetailInfo(
          "Đầu tư trung bình",
          franchise.investment_approximation
        )}
        {renderDetailInfo("Phí chuyển nhượng", franchise.franchise_fee)}
        {renderDetailInfo("Phí quảng cáo", franchise.advertising_fee)}
      </div>
    );
  }

  renderContent() {
    if (!this.state.franchise) return <Spinner />;
    else {
      const { logo, name, description } = this.state.franchise;
      return (
        <div className="grey darken-2" style={{ padding: "0" }}>
            <SearchBox/>
          <div
            style={{ width: "90%", margin: "0 auto" }}
            className="grey lighten-3"
          >
            <div
              className="grey lighten-5"
              style={{ width: "30vw", height: "150px", margin: "10px auto" }}
            >
              <img alt={name} src={logo} style={{ height: "150px", width: "30vw", paddingTop: '10px', border: '2px solid #90a4ae' }} />
            </div>
            <div style={{ margin: "0 20px 0 20px" }}>
              <h4 className="center">
                Chi phí cơ hội kinh doanh của {name} là gì?
              </h4>
              <hr></hr>
              <div style={{ margin: "0" }}>
                <p>{description}</p>
                <div style={{marginBottom:'0', paddingBottom:'2vh'}} className="grey lighten-2 row">{this.renderInfo()}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  return { franchise: state.franchises };
}
export default connect(mapStateToProps, { fetchFranchiseByName })(CardDetail);
