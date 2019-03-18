import React from "react";

const AddUser = () => {
	// Form state
	const [form, setValues] = useState({
        name: '',
        bio: ''
    });

	return (
		<form className="user-form" onSubmit={}>
            <input value={form.name} name="name" placeholder="name" />
            <input value={form.bio} name="bio" placeholder="bio" />
			<button>Add User</button>
		</form>
	);
};

export default AddUser;
