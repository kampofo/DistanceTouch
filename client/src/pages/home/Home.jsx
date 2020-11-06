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
