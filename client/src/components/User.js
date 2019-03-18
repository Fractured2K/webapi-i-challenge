import React, { Fragment } from "react";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt, faPencilAlt);

const User = props => {
	return (
		<div className="user">
			<h1>{props.name}</h1>
			<p>{props.bio}</p>

			<button className="update">
				<FontAwesomeIcon icon={faPencilAlt} style={{ color: "#fff" }} />
			</button>

			<button
				onClick={() => props.deleteUser(props.id)}
				className="delete"
			>
				<FontAwesomeIcon icon={faTrashAlt} style={{ color: "#fff" }} />
			</button>
		</div>
	);
};

export default User;
