import React, { Fragment } from "react";

const User = props => {
	return (
		<Fragment>
			<h1>{props.name}</h1>
			<p>{props.bio}</p>
		</Fragment>
	);
};

export default User;
