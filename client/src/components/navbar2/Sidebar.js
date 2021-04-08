import React from "react";
import { connect } from "react-redux";
import DropDown from "./DropDown";
import ContactForm from "./ContactForm";


import {
  BY_CATEGORY,
} from "../../config/sideBarDropDownData";

const style = {
  width: "250px",
  fontSize: "1.2rem",
  padding: "20px 0 20px 5px",
  textAlign: "left",
  textTransform: "uppercase",
  border: "1px solid #b0bec5",
  borderRadius: "0",
  cursor: "pointer",
};
class Sidebar extends React.Component {
  render() {
    return (
      <div className={`side-bar ${this.props.menuClicked ? "open" : "close"}`}>
        <DropDown data={BY_CATEGORY} />
        {/* <DropDown data={BY_INVESTMENT_COST} /> */}
        <div className="side-btn">
          <a href="/noi-bat">Franchise nổi bật</a>
        </div>
        <div>
          <ContactForm formStyle={style} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { menuClicked: state.menuClicked };
}

export default connect(mapStateToProps)(Sidebar);
