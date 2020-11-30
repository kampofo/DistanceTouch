const express = require("express");
const { join } = require("path");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');

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

app.post("/api/insert", (req, res) => {
	const Fname = req.body.Fname;
	const Lname = req.body.Lname;
	const DOB = req.body.DOB;
	const Date = req.body.Date;
	const Time = req.body.Time;
	const Status = req.body.Status;
	db.query("INSERT into Appointments (Fname, Lname, DOB, Date, Time, Status) VALUES (?, ?, ?, ?, ?, ?)", [Fname, Lname, DOB, Date, Time, Status], (err, result) => {
		if (err) {
		console.log(err);
		} else {
		res.send('values inserted');
		}
	});
	});

app.delete("/delete/:lastName/:firstName", (req, res) => {
	const lastName = req.params.lastName;
	const firstName = req.params.firstName;
	db.query("DELETE FROM appointments WHERE Lname = ? AND Fname = ? AND Status = \"Waiting\"", [lastName, firstName], (err, result) => {
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
