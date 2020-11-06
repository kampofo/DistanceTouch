import React from 'react';



function CheckIn(){
return (
        <div>
            <h1>Create Your Reservation.</h1>
            <form action="" method="get">

                <div>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="first-name" name="first-name" placeholder="John"/>
                </div>

                <div>
                    <label htmlFor="Last-name">Last Name:</label>
                    <input type="text" id="Last-name" name="Last-name" placeholder="Doe"/>
                </div>
                
                <div>
                    <label for="appointment-time">Select your appointment date and time:</label>
                    <input type="datetime-local" id="appointment-time" name="appointment-time" />
                </div>

                <button>Create Reservation</button>
            </form>
        </div>
    );
}

export default CheckIn;
