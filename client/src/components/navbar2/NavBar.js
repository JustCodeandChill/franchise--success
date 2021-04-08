import React from "react";
import "./NavBar.css";
import logo from "./franchiseLogo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clickMenu } from "../../actions";
import Sidebar from "./Sidebar";
import ContactForm from "./ContactForm";

const style = {height:'60px', paddingTop:'18px'};

class NavBar extends React.Component {
  openNav = () => {
    this.props.clickMenu();
  };

  renderContent = () => {
    return (
      <div
        style={{}}
        className={`nav-bar ${
          this.props.menuClicked ? "ppushToRight" : "notPushToRight"
        }`}
      >
        <button
          className="menu-btn nav-btn left"
          onClick={() => this.openNav()}
        >
          <i className="material-icons left">menu</i>
          <span className="left">Menu</span>
        </button>
        <div className="left ">
          <Link to="/">
            <img alt="open-shop" src={logo} className="center franchise-logo" />
          </Link>
        </div>

        <div className="">
          <ContactForm formStyle={style}/>
        </div>

        <Sidebar />
      </div>
    );
  };
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
function mapStateToProps(state) {
  return { menuClicked: state.menuClicked };
}
export default connect(mapStateToProps, { clickMenu: clickMenu })(NavBar);
