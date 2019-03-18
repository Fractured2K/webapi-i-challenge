import React, { useState } from "react";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt, faPencilAlt);

const User = props => {
	const [user, setValues] = useState({
		name: props.name,
		bio: props.bio,
		isEditing: false
	});

	const handleIsEditing = () => {
		setValues({
			...user,
			isEditing: !user.isEditing
		});
	};

	return (
		<div className="user">
			{console.log(user.isEditing)}
			{!user.isEditing ? (
				<div>
					<h1>{user.name}</h1>
					<p>{user.bio}</p>

					<button className="update" onClick={handleIsEditing}>
						<FontAwesomeIcon
							icon={faPencilAlt}
							style={{ color: "#fff" }}
						/>
					</button>

					<button
						onClick={() => props.deleteUser(props.id)}
						className="delete"
					>
						<FontAwesomeIcon
							icon={faTrashAlt}
							style={{ color: "#fff" }}
						/>
					</button>
				</div>
			) : (
				<div>
					<form>
						<input placeholder="name" />
						<input placeholder="bio" />
					</form>
					<button onClick={handleIsEditing}>Cancel</button>
				</div>
			)}
		</div>
	);
};

export default User;
