import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import User from "./components/User";

function App() {
	// Users state
	const [users, setUser] = useState([]);

	// Get users on mount
	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get("http://localhost:3001/api/users");

			setUser(res.data);
		};

		fetchUsers();
	}, []);

	// Delete user
	const deleteUser = async id => {
		await axios.delete(`http://localhost:3001/api/users/${id}`);

		// If user id is equal to passed in id don't return
		const data = users.filter(user => user.id !== id);

		setUser(data);
	};

	return (
		<div className="user-list">
			{users.map(user => (
				<User key={user.id} {...user} deleteUser={deleteUser} />
			))}

			<form className="user-form">
				<input placeholder="name" />
				<input placeholder="bio" />
				<button>Add User</button>
			</form>
		</div>
	);
}

export default App;
