import React from 'react';
import { useState, useEffect } from 'react';
import Axios from "axios";

const LogIn = () => {

    const [Pin, setPin] = useState('');
    const [Password, setPassword] = useState('');

    const [LoginStatus, setLoginStatus] = useState('');

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:3001/api/login", {
            Pin: Pin,
            Password: Password,
        }).then(response => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].Pin);

                // window.location.pathname = "/Employee";
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/api/login").then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].Pin);
            }
        });
    }, []);

    return (
        <div className="login">
            <h1>Employee Login</h1>

            {/* Pin */}
            <label htmlFor="Pin">Pin</label>
            <input type="text" name="Pin" onChange={(e) => {
                setPin(e.target.value);
            }} />

            {/* Password */}
            <label htmlFor="Password">Password</label>
            <input type="Password" name="Password" onChange={(e) => {
                setPassword(e.target.value);
            }} />

            <button onClick={login}>Login</button>

            <h1>{LoginStatus}</h1>
        </div>
    );
}

export default LogIn;
