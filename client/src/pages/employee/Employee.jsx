import React from 'react';
import { useInput, useState, useEffect, useMemo } from "react";
import Axios from "axios";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';



function Employee() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [patientsList, setPatientsList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await Axios("http://localhost:3001/api/patients");
      setPatientsList(result.data);
    })();
  }, []);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/patients").then((response) => {
  //     console.log(response.data);
  //     setPatientsList(response.data);
  //   });
  // }, []);

  // const getPatients = (ranges) => {
  //   Axios.get("http://localhost:3001/api/patients").then((response) => {
  //     setPatientsList(response.data);
  //   });
  // };

  // const hidePatients = () => {
  //   setPatientsList([]);
  // };

  // const handleChange = ({ target }) => {
  //   this.setState({ [target.name]: target.value });
  // };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }

  const columns = [
    { key: 'Fname', name: 'First Name' },
    { key: 'Lname', name: 'Last Name' },
    { key: 'Date', name: 'Date' },
    { key: 'Time', name: 'Time' },
    { key: 'DOB', name: 'DOB' },
    { key: 'Status', name: 'Status' },
    { key: 'Category', name: 'Category' },

  ];

  const checkoutPatient = () => {
    Axios.delete(`http://localhost:3001/api/delete/${lastName}/${firstName}`);
  }

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   Axios.delete(`http://localhost:3001/api/delete/${lastName}/${firstName}`);
  //   window.location.reload(false);
  // }

  return (
    <div>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>Welcome employee!</h1>
      <DataGrid className='rdg-light'
        columns={columns}
        rows={patientsList}
      />
      <h4>Check Patient Out</h4>
      <form onSubmit={checkoutPatient}>
        <label>
          First Name:
        <input
            type="text"
            value={firstName}
            onChange={e => setfirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
        <input
            type="text"
            value={lastName}
            onChange={e => setlastName(e.target.value)}
          />
        </label>
        <button>Delete</button>
      </form>
    </div>
  );
}

export default Employee;
