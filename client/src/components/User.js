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

	// handle edit check
	const handleIsEditing = () => {
		setValues({
			...user,
			isEditing: !user.isEditing
		});
	};

	// handle form changes
	const handleUpdateValue = e => {
		setValues({
			...user,
			[e.target.name]: e.target.value
		});
	};

	// handle update user
	const handleUpdateUser = e => {
		e.preventDefault();

		const updateUser = {
			name: user.name,
			bio: user.bio
		};

		props.updateUser(updateUser, props.id);

		setValues({
			...user,
			isEditing: !user.isEditing
		});
	};

	return (
		<div className="user">
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
					<form className="user-form" onSubmit={handleUpdateUser}>
						<input
							value={user.name}
							name="name"
							placeholder="name"
							onChange={handleUpdateValue}
						/>
						<input
							value={user.bio}
							name="bio"
							placeholder="bio"
							onChange={handleUpdateValue}
						/>
						<button>Update User</button>
					</form>
					<button onClick={handleIsEditing}>Cancel</button>
				</div>
			)}
		</div>
	);
};

export default User;
