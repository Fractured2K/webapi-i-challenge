const express = require("express");

// database
const db = require("./data/db");

const server = express();

// Create user route
server.post("/api/users", (req, res) => {});

server.listen(3001, () => {
	console.log(`=== Server now listening on http://localhost:3001 ===`);
});
