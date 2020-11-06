import { useState } from "react";
import Axios from "axios";

function Home() {
  const [ID, setID] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [DOB, setDOB] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [Status, setStatus] = useState("");


  const [data, setData] = useState([]);

  const getData = () => {
    Axios.get("http://localhost:3001/api/patients").then((response) => {
      setData(response.data);
    });
  };

  return (
    <div className="App">

      <div className="employees">
        <button onClick={getData}>Show Data</button>

        {data.map((val, key) => {
          return (
            <div className="employee">
              <h3>ID: {val.ID}</h3>
              <h3>Fname: {val.Fname}</h3>
              <h3>Lname: {val.Lname}</h3>
              <h3>DOB: {val.DOB}</h3>
              <h3>Date: {val.Date}</h3>
              <h3>Time: {val.Time}</h3>
              <h3>Status: {val.Status}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

