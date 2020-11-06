const express = require("express");
const { join } = require("path");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "Project455",
});

app.get("/api/patients", (req, res) => {
	db.query("SELECT * FROM Appointments", (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
	  }
	});
  });

app.listen("3001", () => {
	console.log("App listening on port 3001");
});