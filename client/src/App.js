import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import User from "./components/User";

function App() {
	const [users, setUser] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get("http://localhost:3001/api/users");

			setUser(res.data);
		};

		fetchUsers();
	}, []);

	return (
		<div>
			{users.map(user => (
				<User key={user.id} {...user} />
			))}
		</div>
	);
}

export default App;
