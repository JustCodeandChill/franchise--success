/** @format */

import React from "react";
import Title from "../Title";
import { newsConfig } from "../../config/newsData";

class News extends React.Component {
	render() {
        const {titleConfig} = newsConfig;
		return (
			<div className='row grey lighten-5' style={{ width: "98%", marginBottom:'5px' }}>
				<div className='col s12 center hide-on-small-only'>
					<Title {...titleConfig} />
				</div>
			</div>
		);
	}
}

export default News;
