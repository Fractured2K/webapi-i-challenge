import React, { useState } from "react";

const AddUser = props => {
	// Form state
	const [user, setValues] = useState({
		name: "",
		bio: ""
	});

	// handle form changes
	const handleUpdateValue = e => {
		setValues({
			...user,
			[e.target.name]: e.target.value
		});
	};

	// add user event handler
	const handleAddUser = e => {
		e.preventDefault();

		props.addUser(user);

		setValues({
			...user,
			name: "",
			bio: ""
		});
	};

	return (
		<form className="user-form" onSubmit={handleAddUser}>
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
			<button>Add User</button>
		</form>
	);
};

export default AddUser;
