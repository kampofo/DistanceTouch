import React, { useState } from 'react';
import Axios from "axios";


function CheckIn() {

    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [DOB, setDOB] = useState("");
    const [Status, setStatus] = useState("Waiting");

    const checkInPatient = () => {
        Axios.put("http://localhost:3001/api/update", {
            Fname: Fname,
            Lname: Lname,
            DOB: DOB,
            Status: Status,
        }).then(() => {
            alert("Reservation has been created successfully.");
        });
    }

    return (
        <div>
            <h1>Check in for your appointment below.</h1>
            <form onSubmit={checkInPatient}>

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


                <button>Check In</button>
            </form>

        </div >
    );
}

export default CheckIn;