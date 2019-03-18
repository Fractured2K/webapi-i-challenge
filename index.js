const express = require("express");

// database
const db = require("./data/db");

const server = express();

// Create user endpoint
server.post("/api/users", (req, res) => {
	const user = req.body;

	if (!user.name || !user.body)
		return res
			.status(404)
			.json({
				errorMessage: "Please provide name and bio for the user."
			})
			.end();
});

server.listen(3001, () => {
	console.log(`=== Server now listening on http://localhost:3001 ===`);
});
