const express = require("express");

// database
const db = require("./data/db");

const server = express();

server.listen(3001, () => {
	console.log(`=== Server now listening on http://localhost:3001 ===`);
});
