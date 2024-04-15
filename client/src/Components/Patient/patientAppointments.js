import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import Cookies from "js-cookie";
import PatientNav from "../patientNav";

const PatientAppointments = () => {
  // Use useState to manage appointments state
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments on component mount
  useEffect(() => {
    const headers = {
      authorization: Cookies.get("token"),
    };
    const id = Cookies.get("patient_id");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/appointment/appointmentList/${id}`,
          { headers: headers }
        );
        setAppointments(response.data);
      } catch (error) {
        // Handle errors here
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures fetching data only on initial mount

  return (
    <div>
      <PatientNav />
      <Table>
        <thead>
          <th>Application Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Prescription</th>
        </thead>
        <tbody>
          {/* {appointments && appointments.map((appointment) => ( */}
            <tr key={appointments._id}>
              <td>{appointments._id}</td>
              <td>{appointments.patient_name}</td>
              <td>{appointments.email}</td>
              <td>{appointments.prescription}</td>
            </tr>
          {/* ))} */}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientAppointments;
