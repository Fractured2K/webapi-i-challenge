import React from "react";

const AddUser = () => {
	// Form state
	const [form, setValues] = useState({
        name: '',
        bio: ''
    });

    const updateValue = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }

	return (
		<form className="user-form" onSubmit={}>
            <input value={form.name} name="name" placeholder="name" onChange={updateValue} />
            <input value={form.bio} name="bio" placeholder="bio" onChange={updateValue} />
			<button>Add User</button>
		</form>
	);
};

export default AddUser;
