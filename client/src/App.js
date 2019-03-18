import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [users, setUser] = useState({ users: [] });

	useEffect(async () => {
		const fetchUsers = async () => {
			const res = await axios("http://localhost:3001/api/users");

			setUser(res.data);
		};

		fetchUsers();
	}, []);

	return (
		<div>
			<h1>{console.log(users)}</h1>
		</div>
	);
}

export default App;
