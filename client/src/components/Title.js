/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Title = (props) => {
	const { title, className, style, link } = props;

	return (
		<Link to={link} className={className} style={style}>
			{title}
		</Link>
	);
};

export default Title;
