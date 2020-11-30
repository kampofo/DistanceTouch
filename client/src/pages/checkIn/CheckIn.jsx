import React from 'react';
import Axios from "axios";



function CheckIn() {
    return (
        <div>
            <h1>Create Your Reservation.</h1>
            <form action="" method="Post">

                <div>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="first-name" name="first-name" placeholder="John" />
                </div>

                <div>
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="last-name" name="last-name" placeholder="Doe" />
                </div>

                <div>
                    <label htmlFor="birthday">Date of Birth:</label>
                    <input type="date" id="birthday" name="birthday" placeholder="Doe" />
                </div>

                <div>
                    <label htmlFor="appointment-date">Select your appointment date:</label>
                    <input type="date" id="appointment-date" name="appointment-date" />
                </div>

                <div>
                    <label htmlFor="appointment-time">Select your appointment time:</label>
                    <input type="time" id="appointment-time" name="appointment-time"
                        min="09:00" max="18:00"></input>
                </div>


                <button>Create Reservation</button>
            </form>
        </div>
    );
}

export default CheckIn;