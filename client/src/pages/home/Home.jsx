<<<<<<< HEAD
import React, {useEffect, useState} from 'react';


function Home(){
    // const [patients, setPatients] = useState([]);

    // useEffect(() => {
    //     fetch('/api/patients')
    //         .then(res => res.json())
    //         .then(patients => setPatients(patients));
    // });

    

    return (
        
        <div>
            <h1>Welcome!</h1>
            <h2>Schedule you appointment today!</h2>
            <button>Schedule Now!</button>
            <p>Are you an employee? Click here to sing in.</p>

            {/* <ul>
                {patients.map(patient => 
                    <li key={patient.id}>{patient.name} {patient.age}</li>
                )}
            </ul> */}
        </div>
    );
}

export default Home;
=======
import { useState } from "react";
import {Route} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Home.css'
import logo from './PennMedicineLogo.png'

function Home() {

  const history = useHistory();

  const goCheckin = () => {
    history.push("/Checkin");
  };

  const goEmployee = () => {
    history.push("/Employee");
  };

  

  return (
    <div>
    <div class="vertical-center">
      <Button onClick={goCheckin} size="lg" variant="primary" className="btn-primary">Checking in?</Button>
    </div>
    <div class='logo-vert' style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
    <img src={logo} alt=""/>
    </div>
    </div>
  );
}

export default Home;

>>>>>>> upstream/main
