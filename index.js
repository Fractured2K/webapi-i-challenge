const express = require("express");

// database
const db = require("./data/db");

const server = express();

// Middleware
server.use(express.json()); // parse incoming json

// Create user endpoint
server.post("/api/users", (req, res) => {
	const user = req.body;

	// Check for empty name or body
	if (!user.name || !user.bio)
		return res
			.status(404)
			.json({
				errorMessage: "Please provide name and bio for the user."
			})
			.end();

	// Add user to database
	db.insert(user)
		.then(user => {
			res.status(201).json(user);
		})
		.catch(err => {
			res.status(500).json({
				error:
					"There was an error while saving the user to the database"
			});
		});
});

// Get users endpoint
server.get("/api/users", (req, res) => {
	db.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => {
			res.status(500).json({
				error: "The users information could not be retrieved."
			});
		});
});

// Get user by id endpoint
server.get("/api/users/:id", (req, res) => {});

server.listen(3001, () => {
	console.log(`=== Server now listening on http://localhost:3001 ===`);
});
