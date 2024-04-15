import React from 'react';
import {Nav,NavItem,NavLink,Button,Row,Col,Input} from "reactstrap";
import { Link } from "react-router-dom";
function PatientNav() {
  return (
    <div className='patientNavDiv'>
        <Nav tabs >
            <NavItem>
                <NavLink active >
                    <Link to="/patientLogin">Doctor List</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink >
                    <Link to="/patientLogin/bookAppointment">
                        Book Appointment
                    </Link>
                </NavLink>
            </NavItem >
            <NavItem>
                <NavLink >
                    <Link to="/patientLogin/getPatientProfile">
                        Edit Profile
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink >
                    <Link to="/patientLogin/patientAppointments">
                        View Appointments
                    </Link>
                </NavLink>
            </NavItem>
        </Nav>
    </div>
  )
}

export default PatientNav;