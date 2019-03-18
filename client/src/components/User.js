import React, { Fragment } from "react";

const User = props => {
	return (
		<div className="user">
			<h1>{props.name}</h1>
			<p>{props.bio}</p>
			<button className="delete">Delete</button>
		</div>
	);
};

export default User;
