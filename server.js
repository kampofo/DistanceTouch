const express = require("express");
const { join } = require("path");
const app = express();

app.get("/api/patients", (req, res) => {
	const patients = [
		{
			id: 1,
			name: "john",
			age: 10,
		},
		{
			id: 2,
			name: "bill",
			age: 10,
		},
		{
			id: 3,
			name: "bob",
			age: 10,
		},
		{
			id: 4,
			name: "steve",
			age: 10,
		},
	];

	res.json(patients);
});

app.listen("5000", () => {
	console.log("App listening on port 5000");
});
