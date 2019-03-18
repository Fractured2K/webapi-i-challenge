const express = require("express");

const server = express();

server.listen(3001, () => {
	console.log(`=== Server now listening on http://localhost:3001 ===`);
});
