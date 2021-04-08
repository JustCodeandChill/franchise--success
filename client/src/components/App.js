/** @format */
import "./App.css";
// import "./heroImage/HeroImage.css"
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";
import {connect} from 'react-redux';
import history from '../utils/history';

//component import
import Landing from "./pages/Landing";
import Navbar from './navbar2/NavBar';
import Footer from './landing/Footer'
import CardDetail from './common/CardDetail';
import Article1st from './landing/Article1st';
import Article2nd from './landing/Article2nd';
import CategoryPage from './pages/CategoryPage';
import TopFranchisePage from './pages/TopFranchise';
import Page404 from './pages/Page404'
class App extends React.Component {
  render() {
    return (<div className={`wrapper ${this.props.menuClicked ? 'pushToRight newWidth' : 'notPushToRight'}`}>
		
		<Router history={history}> 
			<div>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Landing} />
					<Route path='/noi-bat' exact component={TopFranchisePage} />
					<Route path='/franchise/:id' exact component={CategoryPage} />
					
					<Route path='/franchise/chi-tiet/:id' exact component={CardDetail} />
					<Route path='/bai-viet/quyen-so-huu/'  exact component={Article1st}/>
					<Route path='/bai-viet/quyet-dinh-tai-chinh'  exact component={Article2nd}/>
					<Route component={Page404} />
				</Switch>
				<Footer />
			</div>
		</Router>
	</div>);
  }
};

function mapStateToProps(state) {
	return {menuClicked : state.menuClicked}
}
export default connect(mapStateToProps)(App);
