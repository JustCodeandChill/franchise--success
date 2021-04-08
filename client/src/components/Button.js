/** @format */
import './Button.css';
import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
	const { title, className, style, link } = props;

	return (
		<button className={className} style={style}>
			<Link to={link} className='white-text center col s12'>
				{title}
			</Link>
		</button>
	);
};

export default Button;
