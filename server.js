const express = require("express");
const { join } = require("path");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');


const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "Project455",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


// create new patient data
app.post("/api/insert", (req, res) => {
	const Fname = req.body.Fname;
	const Lname = req.body.Lname;
	const DOB = req.body.DOB;
	const Date = req.body.Date;
	const Time = req.body.Time;
	const Status = req.body.Status;
	const Category = req.body.Category;

	db.query("INSERT into Appointments (Fname, Lname, DOB, Date, Time, Status, Category, PatientID) VALUES (?, ?, ?, ?, ?, ?, ?, (Select PatientID from patients where Fname=? and Lname=? and DOB=?))", [Fname, Lname, DOB, Date, Time, Status, Category, Fname, Lname, DOB], (err, result) => {
		if (err) {
		console.log(err);
		} else {
		res.send('values inserted');
		}
	});
});

app.post("/api/log", (req, res) => {
	const Fname = req.body.Fname;
	const Lname = req.body.Lname;
	const DOB = req.body.DOB;
	db.query("INSERT INTO patients (Fname, Lname, DOB) SELECT * FROM (SELECT ?, ?, ?) AS tmp WHERE NOT EXISTS (SELECT Fname, Lname, DOB FROM patients WHERE Fname = ? and Lname = ? and DOB = ?) LIMIT 1;", [Fname, Lname, DOB, Fname, Lname, DOB], (err, result) => {
		if (err) {
		console.log(err);
		} else {
		res.send('values inserted');
		}
	});
});

app.post("/api/localize", (req, res) => {
	const Fname = req.body.Fname;
	const Lname = req.body.Lname;
	const Time = req.body.Time;
	const Message = req.body.Message;
	const Category = req.body.Category;
	db.query("INSERT INTO cardiologist (Fname) VALUES ('fuck this');", (err, result) => {
		if (err) {
		console.log(err);
		} else {
		res.send('values inserted');
		}
	});
});



// read all patient data
app.get("/api/patients", (req, res) => {
	db.query("SELECT * FROM Appointments", (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
	  }
	});
});



app.put("/api/update", (req, res) => {

	const Fname = req.body.Fname;
	const Lname = req.body.Lname;
	const DOB = req.body.DOB;
	const Status = req.body.Status;
	const sqlUpdate = "UPDATE appointments SET Status = ? WHERE Lname = ? AND Fname = ? AND DOB = ?"

	db.query(sqlUpdate, [Status, Lname, Fname, DOB], (err, result) => {
		if (err) {
			console.log(err)
		} 
	});
});

// delete specified patient data
app.delete("/api/delete/:lastName/:firstName", (req, res) => {
	const lastName = req.params.lastName;
	const firstName = req.params.firstName;

	console.log(lastName, firstName);

	const sqlDelete = "DELETE FROM appointments WHERE Lname = ? AND Fname = ? AND Status = \"Waiting\"";
	db.query(sqlDelete, [lastName, firstName], (err, result) => {
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
