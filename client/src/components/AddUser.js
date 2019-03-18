import React, { useState } from "react";

const AddUser = props => {
	// Form state
	const [form, setValues] = useState({
		name: "",
		bio: ""
	});

	const updateValue = e => {
		setValues({
			...form,
			[e.target.name]: e.target.value
		});
	};

	return (
		<form className="user-form" onSubmit={props.addUser}>
			<input
				value={form.name}
				name="name"
				placeholder="name"
				onChange={updateValue}
			/>
			<input
				value={form.bio}
				name="bio"
				placeholder="bio"
				onChange={updateValue}
			/>
			<button>Add User</button>
		</form>
	);
};

export default AddUser;
