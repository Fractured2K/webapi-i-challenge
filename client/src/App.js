import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import User from "./components/User";
import AddUser from "./components/AddUser";

function App() {
	// Users state
	const [users, setUser] = useState([]);

	// Get users on component did mount
	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get("http://localhost:3001/api/users");
			setUser(res.data);
		};

		fetchUsers();
	}, []);

	// Add user
	const addUser = async user => {
		const res = await axios.post("http://localhost:3001/api/users", user);

		// give user object a propert of id and set its value to the response id
		user.id = res.data.id;

		// add new user onto users array
		const updatedUsers = [...users, user];

		setUser(updatedUsers);
	};

	// Update user
	const updateUser = async (user, id) => {
		await axios.put(`http://localhost:3001/api/users/${id}`, user);
	};

	// Delete user
	const deleteUser = async id => {
		await axios.delete(`http://localhost:3001/api/users/${id}`);
		const updatedUsers = users.filter(user => user.id !== id);
		setUser(updatedUsers);
	};

	return (
		<div className="user-list">
			{users.map(user => (
				<User
					key={user.id}
					{...user}
					updateUser={updateUser}
					deleteUser={deleteUser}
				/>
			))}

			<AddUser addUser={addUser} />
		</div>
	);
}

export default App;
