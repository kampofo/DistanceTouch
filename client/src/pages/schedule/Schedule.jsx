import React, { useState } from 'react';
import Axios from "axios";



function Schedule() {

    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [DOB, setDOB] = useState("");
    const [Date, setDate] = useState("");
    const [Time, setTime] = useState("");
    const [Status, setStatus] = useState("Absent");

    const submitReservation = () => {
        Axios.post("http://localhost:3001/api/insert", {
            Fname: Fname,
            Lname: Lname,
            DOB: DOB,
            Date: Date,
            Time: Time,
            Status: Status,
        }).then(() => {
            alert("Reservation has been created successfully.");
        });
    }

    return (
        <div>
            <h1>Create Your Reservation.</h1>
            <form onSubmit={submitReservation}>

                <div>
                    <label htmlFor="Fname">First Name:</label>
                    <input type="text" id="Fname" name="Fname" placeholder="John" onChange={(e) => {
                        setFname(e.target.value);
                    }} required />
                </div>

                <div>
                    <label htmlFor="Lname">Last Name:</label>
                    <input type="text" id="Lname" name="Lname" placeholder="Doe" onChange={(e) => {
                        setLname(e.target.value);
                    }} required />
                </div>

                <div>
                    <label htmlFor="DOB">Date of Birth:</label>
                    <input type="date" id="DOB" name="DOB" onChange={(e) => {
                        setDOB(e.target.value);
                    }} required />
                </div>

                <div>
                    <label htmlFor="Date">Select your appointment date:</label>
                    <input type="date" id="Date" name="Date" onChange={(e) => {
                        setDate(e.target.value);
                    }} />
                </div>

                <div>
                    <label htmlFor="Time">Select your appointment time:</label>
                    <input type="time" id="Time" name="Time" onChange={(e) => {
                        setTime(e.target.value);
                    }}
                        min="09:00" max="18:00"></input>
                </div>
                <button>Create Reservation</button>

            </form>

        </div >
    );
}

export default Schedule;